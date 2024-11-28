import { ApolloClient } from "@apollo/client";
import Toolbar from "quill/modules/toolbar";
import { Client } from 'graphql-ws';
import Quill, { Parchment } from 'quill';
import { Delta, EmitterSource } from 'quill/core';
import DeltaQueue from "./DeltaQueue";
import { useGetEventDocumentServerRequestSync } from "@/app/api/document";

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

export default class PageManager {
    public config: PageConfiguration;
    private Quill: typeof Quill;
    public _toolbar: Toolbar | undefined;
    public pages: Quill[] = [];
    public _currentPageIndex: number = 0;
    public subscription: any;
    public clientHTTP: ApolloClient<any>;
    public clientWS: Client;
    public deltaQueue: DeltaQueue;
    public documentId: string = ""
    public userId: string = ""
    public sessionId: string = ""

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
                // this.pages[result?.data?.document?.pageIndex].updateContents(JSON.parse(result.data?.document.delta), Quill.sources.SILENT);
                this.applyDelta(JSON.parse(result.data?.document.delta), result?.data?.document?.pageIndex, Quill.sources.API);
            }

            if (result?.data?.document?.requestSync) {
                console.log("meow meow");
                
                const delta = this.gotoPage(result?.data?.document?.pageIndex).getContents()
                if (delta) {
                    const { data } = await useGetEventDocumentServerRequestSync(this.sessionId, JSON.stringify(delta), this.documentId, result?.data?.document?.pageIndex)
                }
            };
        }
    }

    constructor(sessionId: string, userId: string, docID: string, quill: Quill, clientHTTP: ApolloClient<any>, clientWS: Client, deltaQueue: DeltaQueue) {
        // initialize config
        this.sessionId = sessionId
        this.config = new PageConfiguration('A4', GLOBAL_MARGIN);
        this.Quill = Quill; // Quill class
        this.pushToPageList(quill);
        this.clientHTTP = clientHTTP;
        this.clientWS = clientWS;
        this.userId = userId
        this.deltaQueue = deltaQueue;
        this.documentId = docID

        this.subscribeDocument(docID)
        // this.deltaManager = new DeltaManager(quill.getContents());
    }
    static newQuill(container: HTMLElement) {
        return new Quill(container, {
            modules: {
                toolbar: false,
            },
            placeholder: 'Type here...',
            theme: 'snow',
        });
    }
    registerGlobalModule(module: any) {
        this.Quill.register(module, true);
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
        const newPage = new this.Quill(container, {
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
        newPage.style.margin = `${this.config.margin}px`;
        newPage.className = 'overflow-auto min-h-full bg-white drop-shadow-lg';
        // append new page to document after last page
        this.getLastPage().container.after(newPage);
        // create new quill instance and push to page list
        const newQuill = PageManager.newQuill(newPage);
        this.pushToPageList(newQuill);
        return newQuill;
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
            Number(this.getCurrentPage().getSelection()?.index) || 0;
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
        console.log(this.pages);
        return this.pages[this.currentPageIndex];
    }

    nextPage() {
        if (this.currentPageIndex + 1 < this.pages.length) {
            return this.pages[this.currentPageIndex + 1];
        }
        return this.newJSXPage(document);
    }

    previousPage() {
        if (this.currentPageIndex - 1 >= 0) {
            return this.pages[this.currentPageIndex - 1];
        }
        return null;
    }

    // example: applyDelta(delta, 0, Quill.sources.USER)
    async applyDelta(delta: Delta, pageIndex: number, source?: EmitterSource) {
        if (!source) {
            source = Quill.sources.SILENT;
        }
        this.pages[pageIndex].updateContents(delta, source);
    }

    async setDelta(delta: Delta, pageIndex: number, source?: EmitterSource) {
        if (!source) {
            source = Quill.sources.SILENT;
        }
        this.pages[pageIndex].setContents(delta, source);
    }

    pushToPageList(page: Quill) {
        // pre push section
        // register event listener
        page.on(EVENT_NAMES.TEXT_CHANGE, (delta, oldDelta, source) => {
            if (source === Quill.sources.SILENT) {
                return;
            }
            if (source === Quill.sources.API) {
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

            this.deltaQueue.push({
                delta: delta,
                documentId: this.documentId,
                pageIndex: this.currentPageIndex
            });

        });
        // catch scroll event
        page.on(EVENT_NAMES.SCROLL_UPDATE, (eventName, ...args) => {
            // console.log(eventName, args);
        });

        page.on(EVENT_NAMES.EDITOR_CHANGE, (eventName, ...args) => {
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
        page.on(EVENT_NAMES.SELECTION_CHANGE, (eventName, ...args) => {
            // console.log(eventName, args);
            if (args[0] !== null) return;
            // check if current page index change
            if (this.currentPageIndex !== this.pages.indexOf(page)) {
                console.log('current page index change');
                this.currentPageIndex = this.pages.indexOf(page);
            }
            else {
                console.log('only selection change');
            }

        });
        // push to page list
        this.pages.push(page);
    }

    trimOverflowingContent(page: Quill) {
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
                Quill.sources.SILENT
            );
            // apply overflow delta to next page
            this.nextPage().updateContents(overflowDelta, Quill.sources.SILENT);
            // this.moveCursorToNextPage();
        }
    }

    // neverfix
    // handleUnderflowContent(page: Quill) {
    //   // handle underflow content in page
    //   const underflowContent = page.getContents();
    //   const underflowDelta = underflowContent.slice(0, 1);
    //   page.deleteText(0, 1, Quill.sources.SILENT);
    //   this.previousPage()?.updateContents(underflowDelta, Quill.sources.SILENT);
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
        this.pages[index].options.modules.toolbar = this.toolbar;
    }

    focusToPage(index: number) {
        // attach toolbar to current page
        // this.getCurrentPage().getModule('toolbar').attach(this.pages[index]);
    }

    formatSelected(format: string, params: string) {
        this.getCurrentPage().format(format, params, Quill.sources.USER);
    }

    static isPageOverflowing(page: Quill) {
        return page.root.scrollHeight > page.root.clientHeight;
    }
}