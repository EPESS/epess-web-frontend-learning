import Toolbar from "quill/modules/toolbar";
import { Client } from 'graphql-ws';
import Quill, { Parchment } from 'quill';
import { Delta, EmitterSource } from 'quill/core';
import DeltaQueue from "./DeltaQueue";
import { useGetEventDocumentServerRequestSync } from "@/app/api/document";
import { ApolloClient } from "@apollo/client";
import { toast } from "react-toastify";

export enum EVENT_NAMES {
    TEXT_CHANGE = 'text-change',
    EDITOR_CHANGE = 'editor-change',
    EDITOR_ATTACH = 'editor-attach',
    EDITOR_DETACH = 'editor-detach',
    EDITOR_FOCUS = 'editor-focus',
    EDITOR_UNFOCUS = 'editor-unfocus',
    SCROLL_UPDATE = 'scroll-update',
    SELECTION_CHANGE = 'selection-change',
    AI_SUGGESTION = 'ai-suggestion',
    PAGE_DELETE = 'page-delete',
}

export const GLOBAL_MARGIN = 30;

export const PAGE_SIZES = {
    A4: {
        padding: 10,
        width: 210,
        height: 297,
    },
    A3: {
        padding: 10,
        width: 297,
        height: 420,
    },
    Legal: {
        padding: 10,
        width: 215.9,
        height: 355.6,
    },
    Tabloid: {
        padding: 10,
        width: 1509.36,
        height: 2133.6,
    },
    Letter: {
        padding: 10,
        width: 215.9,
        height: 279.4,
    },
};

export type ViewConfig = {
    zoomPercent: number;
};

export class PageConfiguration {
    public pageSize: string;
    public margin: number;
    public padding: number;
    public viewConfig: ViewConfig;
    constructor(pageSize: string, GLOBAL_MARGIN: number) {
        this.pageSize = pageSize;
        this.margin = GLOBAL_MARGIN;
        this.padding = PAGE_SIZES[pageSize].padding;
        this.viewConfig = {
            zoomPercent: 100,
        };
    }
}

export class DeltaManager {
    public delta: Delta;
    constructor(delta: Delta) {
        this.delta = delta;
    }

    getDelta() {
        return this.delta;
    }
}

class QuillWrapper extends Quill {
    saved: boolean = true
}

export default class PageManager {
    public config: PageConfiguration;
    private QuillWrapper: typeof QuillWrapper;
    public _toolbar: Toolbar | undefined;
    public pages: QuillWrapper[] = [];
    public _currentPageIndex: number = 0;
    public subscription: any;
    public clientHTTP: ApolloClient<any>;
    public clientWS: Client;
    public deltaQueue: DeltaQueue;
    public documentId: string = ""
    public userId: string = ""
    public sessionId: string = ""
    public isReadOnly: boolean = false

    

    get currentPageIndex() {

        return this._currentPageIndex;
    }
    set currentPageIndex(index: number) {
        this._currentPageIndex = index;
        this.attachToolbarToPage(index);
    }
    get toolbar() {
        return new Toolbar(this.pages[this.currentPageIndex], {
            container: document.getElementById('toolbar'),
        });
    }

    subscribeDocument = async (documentId: string) => {
        for await (const result of this.clientWS.iterate<{ document: { senderId: string, requestSync: boolean, delta: string, documentId: string, pageIndex: number } }>({
            query: `subscription Document {
    document(documentId: "${documentId}") {
        delta
        documentId
        eventType
        pageIndex
        requestSync
        senderId
        totalPage
    }
  }`
        })) {

            if (result?.data?.document && (result?.data?.document.senderId !== this.userId)) {
                // this.pages[result?.data?.document?.pageIndex].updateContents(JSON.parse(result.data?.document.delta), QuillWrapper.sources.SILENT);
                this.applyDelta(JSON.parse(result.data?.document.delta), result?.data?.document?.pageIndex, QuillWrapper.sources.API);
            }

            if (result?.data?.document?.requestSync) {
                console.log("meow meow");

                const delta = this.gotoPage(result?.data?.document?.pageIndex).getContents()
                if (delta) {
                    await useGetEventDocumentServerRequestSync(this.sessionId, JSON.stringify(delta), this.documentId, result?.data?.document?.pageIndex)
                }
            };
        }
    }

    constructor(isReadOnly: boolean, sessionId: string, userId: string, docID: string, quill: QuillWrapper, clientHTTP: ApolloClient<any>, clientWS: Client, deltaQueue: DeltaQueue) {
        // initialize config
        this.isReadOnly = isReadOnly
        this.sessionId = sessionId
        this.config = new PageConfiguration('A4', GLOBAL_MARGIN);
        this.QuillWrapper = QuillWrapper; // QuillWrapper class
        this.pushToPageList(quill);
        this.clientHTTP = clientHTTP;
        this.clientWS = clientWS;
        this.userId = userId
        this.deltaQueue = deltaQueue;
        this.documentId = docID
        this.registerEventListener()
        this.subscribeDocument(docID)
        // this.deltaManager = new DeltaManager(quill.getContents());
    }
    static newQuill(container: HTMLElement, isReadOnly: boolean,) {
        return new QuillWrapper(container, {
            readOnly: isReadOnly,
            modules: {
                toolbar: false,
            },
            placeholder: 'Type here...',
            theme: 'snow',
        });
    }
    registerGlobalModule(module: any) {
        this.QuillWrapper.register(module, true);
    }

    registerPageModule(module: any) {
        let registry = new Parchment.Registry();
        registry.register(module);
        return registry;
    }

    getToolbar() {
        return this.toolbar;
    }

    // newPage return page reference
    newPage(container: HTMLElement) {
        // create new quill instance using registry and push to pages array
        const newPage = new this.QuillWrapper(container, {
            modules: {
                toolbar: false,
            },
            theme: 'snow',
        });
        this.pushToPageList(newPage);
        // return element and append after page-0
        return {
            container: newPage.container,
            quill: newPage,
        };
    }

    newJSXPage(document: Document) {
        // padding size
        const { width, height } = PAGE_SIZES[this.config.pageSize];
        const newPage = document.createElement('div');
        newPage.id = `page-${this.pages.length}`;
        newPage.style.width = `${width}mm`;
        newPage.style.height = `${height}mm`;
        newPage.style.marginTop = `${this.config.margin}px`;
        newPage.style.marginBottom = `${this.config.margin}px`;
        newPage.className = 'overflow-auto min-h-full bg-white drop-shadow-lg';
        // append new page to document after last page
        this.getLastPage().container.after(newPage);
        // create new quill instance and push to page list
        const newQuill = PageManager.newQuill(newPage,this.isReadOnly);
        this.pushToPageList(newQuill);
        return newQuill;
    }

    newJSXPageWithData(document: Document, data: Delta) {
        // padding size
        const { width, height } = PAGE_SIZES[this.config.pageSize];
        const newPage = document.createElement('div');
        newPage.id = `page-${this.pages.length}`;
        newPage.style.width = `${width}mm`;
        newPage.style.height = `${height}mm`;
        newPage.style.marginTop = `${this.config.margin}px`;
        newPage.style.marginBottom = `${this.config.margin}px`;
        newPage.className = 'overflow-auto min-h-full bg-white drop-shadow-lg';
        // append new page to document after last page
        this.getLastPage().container.after(newPage);
        // create new quill instance and push to page list
        const newQuill = PageManager.newQuill(newPage, this.isReadOnly);
        newQuill.setContents(data)
        this.pushToPageList(newQuill);
        return newQuill;
    }

    registerEventListener() {
        let updateLoading = false

        document.addEventListener("keydown", async (e) => {
            if (!updateLoading && e.ctrlKey && e.key === "s") {
                e.preventDefault()
                const listUnsavedPage = this.pages.filter((page) => !page.saved)

                if (listUnsavedPage.length) {
                    updateLoading = true
                    let errors: string[] = []

                    try {
                        await Promise.all(listUnsavedPage.map(async (page) => {
                            try {
                                await useGetEventDocumentServerRequestSync(
                                    this.sessionId,
                                    JSON.stringify(page.getContents()),
                                    this.documentId,
                                    Number(page.container.id.split("-")[1])
                                )
                                this.pages[Number(page.container.id.split("-")[1])].saved = true
                            } catch (err: any) {
                                // Collect all errors
                                errors.push(`Error updating page ${page.container.id}: ${err.message}`)
                            }
                        }))

                        if (errors.length === 0) {
                            toast.success("Cập nhật thành công")
                        } else {
                            toast.error(`Có lỗi xảy ra: ${errors.join(", ")}`)
                        }
                    } catch {
                        toast.error("Có lỗi xảy ra trong quá trình cập nhật.")
                    } finally {
                        updateLoading = false
                    }
                }
            }
        })
    }


    deletePage(index: number): boolean {
        try {
            this.pages.splice(index, 1);
            // remove page from document
            document.getElementById(`page-${index}`)?.remove();
            this.pages[index].emitter.emit(EVENT_NAMES.PAGE_DELETE, index);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    getCurrentCursor() {
        const currentPosition: number =
            Number(this.getCurrentPage()?.getSelection()?.index) || 0;

        return currentPosition;
    }

    getFirstPage() {
        return this.pages[0];
    }

    getLastPage() {
        return this.pages[this.pages.length - 1];
    }

    gotoPage(index: number) {
        return this.pages[index];
    }

    getCurrentPage() {
        return this.pages[this.currentPageIndex];
    }

    nextPage() {
        if (this.currentPageIndex + 1 < this.pages.length) {
            return this.pages[this.currentPageIndex + 1];
        }
        return this.newJSXPage(document);
    }

    async loadNextWithData(delta: Delta) {
        return this.newJSXPageWithData(document, delta);
    }
    // async loadNextWithData() {
    //     return this.nextPage();
    // }

    previousPage() {
        if (this.currentPageIndex - 1 >= 0) {
            return this.pages[this.currentPageIndex - 1];
        }
        return null;
    }

    // example: applyDelta(delta, 0, QuillWrapper.sources.USER)
    async applyDelta(delta: Delta, pageIndex: number, source?: EmitterSource) {
        if (!source) {
            source = QuillWrapper.sources.SILENT;
        }
        this.pages[pageIndex].updateContents(delta, source);
    }

    async setDelta(delta: Delta, pageIndex: number, source?: EmitterSource) {
        if (!source) {
            source = QuillWrapper.sources.SILENT;
        }
        this.pages[pageIndex].setContents(delta, source);
    }

    pushToPageList(page: QuillWrapper) {
        let tooltip = document.createElement('div');

        // pre push section
        // register event listener

        page.on(EVENT_NAMES.TEXT_CHANGE, (delta, oldDelta, source) => {
            if (source === QuillWrapper.sources.SILENT) {
                return;
            }
            if (source === QuillWrapper.sources.API) {
                return;
            }
            if (!(delta instanceof Delta)) {
                return;
            }
            if (page.container.id !== 'page-0' && page.getLength() === 1) {
                console.log('delete page');
                console.log(page.container.id);
                this.deletePage(this.pages.indexOf(page));
            }

            page.saved = false

            this.deltaQueue.push({
                delta: delta,
                documentId: this.documentId,
                pageIndex: this.currentPageIndex
            });

        });

        page.on(EVENT_NAMES.EDITOR_CHANGE, () => {

            // Check if the current page is overflowing
            if (PageManager.isPageOverflowing(page)) {
                console.log('page is overflowing');
                this.trimOverflowingContent(page);
            }
            // update current page index if page index change
            if (this.currentPageIndex !== this.pages.indexOf(page)) {
                this.currentPageIndex = this.pages.indexOf(page);
                // update toolbar
                this.attachToolbarToPage(this.currentPageIndex);
            }
        });
        page.on(EVENT_NAMES.SELECTION_CHANGE, (range) => {
            let editor = document.querySelector(`#page-${this.currentPageIndex} .ql-editor`);
            if (!editor) return
            let editorOffset = editor?.getBoundingClientRect();

            if (range) {
                tooltip.style.maxWidth = "700px"
                tooltip.style.minWidth = "300px"
                tooltip.style.maxHeight = "170px"
                tooltip.style.overflowY = "auto"
                tooltip.style.zIndex = "100"
                tooltip.style.whiteSpace = "normal"
                tooltip.style.wordBreak = "break-word"
                tooltip.id = 'tooltip';
                tooltip.style.display = 'none'; // Ban đầu ẩn đi
                tooltip.style.position = 'absolute';
                document.body.appendChild(tooltip);

                if (range.length == 0) {
                    console.log('User cursor is on', range.index);
                    tooltip.style.display = 'none';
                } else {
                    const text = this.getCurrentPage().getText(range.index, range.length);
                    console.log('User has highlighted', text);
                    let bounds = this.getCurrentPage().getBounds(range);
                    console.log("bounds", bounds);


                    if (bounds) {
                        tooltip.innerText = `${text}`
                        tooltip.style.display = 'block';
                        tooltip.style.position = "absolute"
                        tooltip.style.top = `${editorOffset.top + bounds.top - tooltip.offsetHeight - 5}px`;
                        tooltip.style.left = `${editorOffset.left + bounds.left + 5}px`;
                        tooltip.style.height = "auto"
                    }
                }
            } else {
                tooltip.style.display = 'none'; // Ban đầu ẩn đi
                console.log('Cursor not in the editor');
            }
        });
        // push to page list
        this.pages.push(page);
    }

    trimOverflowingContent(page: QuillWrapper) {
        // calculate overflow content in delta, delete overflow content and apply delta to next page
        const overflowContent = page.getContents();
        let contentHeight = 0;
        let deleteIndex = 0;

        const lines = page.getLines();
        const effectivePageHeight =
            page.root.clientHeight -
            (this.config.margin + this.config.padding * 2) -
            1;

        for (let index = 0; index < lines.length; index++) {
            const line = lines[index];
            contentHeight += line.domNode.offsetHeight;
            if (contentHeight >= effectivePageHeight) {
                deleteIndex = page.getIndex(line);
                break; // Break the loop
            }
        }

        if (deleteIndex > 0) {
            const overflowDelta = overflowContent.slice(deleteIndex);
            page.deleteText(
                deleteIndex,
                overflowContent.length() - deleteIndex,
                QuillWrapper.sources.SILENT
            );
            // apply overflow delta to next page
            this.nextPage().updateContents(overflowDelta, QuillWrapper.sources.USER);
            // this.moveCursorToNextPage();
        }
    }

    // neverfix
    // handleUnderflowContent(page: QuillWrapper) {
    //   // handle underflow content in page
    //   const underflowContent = page.getContents();
    //   const underflowDelta = underflowContent.slice(0, 1);
    //   page.deleteText(0, 1, QuillWrapper.sources.SILENT);
    //   this.previousPage()?.updateContents(underflowDelta, QuillWrapper.sources.SILENT);
    // }

    moveCursorToNextPage() {
        this.getCurrentPage().blur();
        this.currentPageIndex++;
        // using document.getElementById to move cursor to next page
        this.getCurrentPage().focus();
        // set selection to beginning of the page
        this.getCurrentPage().setSelection(0);
    }

    attachToolbarToPage(index: number) {
        if (this.pages[index].options.modules.toolbar) {
            this.pages[index].options.modules.toolbar = this.toolbar;
        }

    }

    // focusToPage(index: number) {
    // attach toolbar to current page
    // this.getCurrentPage().getModule('toolbar').attach(this.pages[index]);
    // }

    formatSelected(format: string, params: string) {
        this.getCurrentPage().format(format, params, QuillWrapper.sources.USER);
    }

    static isPageOverflowing(page: QuillWrapper) {
        return page.root.scrollHeight > page.root.clientHeight;
    }
}