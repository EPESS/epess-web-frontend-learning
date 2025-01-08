import Toolbar, { ToolbarProps } from 'quill/modules/toolbar';
import { Client } from 'graphql-ws';
import Quill, { Parchment } from 'quill';
import { Delta, EmitterSource, Range } from 'quill/core';
import DeltaQueue from './DeltaQueue';
import { useGetEventDocumentServerRequestSync } from '@/app/api/document';
import { ApolloClient } from '@apollo/client';
import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';
import { randomString } from '@/lib/client-utils';
import { useUploadPreviewImgDoc } from '@/app/api/document/uploadPreviewImgDoc';
import { useUpdateDocumentPreviewImage } from '@/app/api/document/updateDocumentPreviewImage';
import QuillCursors, { Cursor } from 'quill-cursors';
import registerQuillLanguageTool from 'quill-languagetool/src';
import { removeSuggestionBoxes } from 'quill-languagetool';
import crypto from 'crypto';
import { gql } from '@/graphql';

registerQuillLanguageTool(Quill);

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

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [
    {
      color: [
        'red',
        'blue',
        'orange',
        'yellow',
        'purple',
        'grey',
        'green',
        'brown',
        'pink',
        'cyan',
        'black',
        'white',
        'lightgreen',
      ],
    },
    {
      background: [
        'red',
        'blue',
        'orange',
        'yellow',
        'purple',
        'grey',
        'green',
        'brown',
        'pink',
        'cyan',
        'black',
        'white',
        'lightgreen',
      ],
    },
  ], // dropdown with defaults from theme
  [{ font: ['', 'serif', 'monospace'] }],
  [{ align: ['', 'center', 'right', 'justify'] }],

  ['clean'], // remove formatting button
];

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
  saved: boolean = true;
}

Quill.register('modules/cursors', QuillCursors);

export default class PageManager {
  public config: PageConfiguration;
  private QuillWrapper: typeof QuillWrapper;
  public _toolbar: Toolbar | undefined;
  public pages: QuillWrapper[] = [];
  public _currentPageIndex: number = 0;
  public subscription: any;
  public clientHTTP: ApolloClient<any>;
  public deltaQueue: DeltaQueue;
  public documentId: string = '';
  public userId: string = '';
  public userName: string = '';
  public sessionId: string = '';
  public isReadOnly: boolean = false;
  public timeoutId: NodeJS.Timeout | null = null;
  public isSaveLoading: (value: boolean) => void = () => {};
  public quillCursors: QuillCursors | null = null;

  constructor(
    isReadOnly: boolean,
    sessionId: string,
    userId: string,
    userName: string,
    docID: string,
    quill: QuillWrapper,
    clientHTTP: ApolloClient<any>,
    deltaQueue: DeltaQueue,
    isSaveLoading: (value: boolean) => void
  ) {
    // initialize config
    this.isReadOnly = isReadOnly;
    this.sessionId = sessionId;
    this.config = new PageConfiguration('A4', GLOBAL_MARGIN);
    this.QuillWrapper = QuillWrapper; // QuillWrapper class
    this.pushToPageList(quill);
    this.clientHTTP = clientHTTP;
    this.userId = userId;
    this.userName = userName;
    this.deltaQueue = deltaQueue;
    this.documentId = docID;
    this.registerEventListener();
    this.subscribeDocument(docID);
    this.isSaveLoading = isSaveLoading;
    this.quillCursors = new QuillCursors(quill);
    // this.deltaManager = new DeltaManager(quill.getContents());
  }

  handleIsSaveLoading(value: boolean) {
    this.isSaveLoading(value);
  }

  // generate cursor color from userid and convert to hex color
  // user_2nQcfn8VKMgTEoGc4p9JRdHr6uJ to number and convert to hex color
  generateCursorColor(userId: string) {
    const hash = crypto.createHash('sha256').update(userId).digest('hex');
    const number = parseInt(hash.slice(0, 6), 16);
    return `#${number.toString(16).padStart(6, '0')}`;
  }

  get currentPageIndex() {
    return this._currentPageIndex;
  }
  set currentPageIndex(index: number) {
    this._currentPageIndex = index;
    this.attachToolbarToPage(index);
  }

  // get toolbar() {
  //     const firstPage = this.getFirstPage();
  //     let toolbar = firstPage.options.modules;

  //     return toolbar;
  // }

  subscribeDocument = async (documentId: string) => {
    const subscription = this.clientHTTP.subscribe({
      query: gql(
        `
        subscription subscribeDocument($documentId: String!) {
          document(documentId: $documentId) {
            senderId
            requestSync
            delta
            eventType
            documentId
            pageIndex
            cursor {
              color
              id
              name
              range {
                index
                length
              }
            }
          }
        }
      `
      ),
      variables: { documentId },
    });

    subscription.subscribe({
      next: (result) => {
        const data = result.data;

        if (
          data?.document &&
          data.document.senderId !== this.userId &&
          data.document.senderId !== 'system'
        ) {
          this.applyDelta(
            JSON.parse(data.document.delta),
            data.document.pageIndex ?? 0,
            QuillWrapper.sources.API
          );
        }

        // Handle other subscription events
        if (data?.document?.requestSync) {
          console.log('Syncing document');

          removeSuggestionBoxes(this.pages[data?.document?.pageIndex ?? 0]);
          const delta = this.gotoPage(
            data?.document?.pageIndex ?? 0
          ).getContents();

          if (delta) {
            this.handleIsSaveLoading(true);
            useGetEventDocumentServerRequestSync(
              this.sessionId,
              JSON.stringify(delta),
              this.documentId,
              null,
              data?.document?.pageIndex ?? 0
            );
          }
          this.handleIsSaveLoading(false);
        }
        if (
          data?.document?.eventType === 'document_cursor_moved' &&
          data?.document?.cursor
        ) {
          // create cursor if not exist
          if (!this.quillCursors) {
            this.quillCursors = new QuillCursors(this.getCurrentPage());
          }
          // check if cursor with same id exist
          const cursor = this.quillCursors
            .cursors()
            .find((cursor) => cursor.id === data?.document?.cursor?.id);
          if (!cursor) {
            this.quillCursors.createCursor(
              data?.document?.cursor?.id ?? '',
              data?.document?.cursor?.name ?? '',
              data?.document?.cursor?.color ?? ''
            );
          }
          this.quillCursors.moveCursor(data?.document?.cursor?.id ?? '', {
            index: data?.document?.cursor?.range?.index ?? 0,
            length: data?.document?.cursor?.range?.length ?? 0,
          });
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
      },
    });
  };

  removeLastOps(delta: Delta) {
    return delta.ops.slice(0, delta.ops.length - 1);
  }

  static newQuill(container: HTMLElement, isReadOnly: boolean) {
    const quill = new QuillWrapper(container, {
      readOnly: isReadOnly,
      modules: {
        toolbar: toolbarOptions,
        cursors: true,
        languageTool: {
          apiOptions: {
            level: 'default',
            language: 'auto',
          },
        },
      },
      placeholder: 'Type here...',
      theme: 'snow',
    });

    const toolbarElement = (quill.getModule('toolbar') as ToolbarProps)
      .container as Element;

    toolbarElement.classList.add(`toolbar-customer`);

    return quill;
  }
  registerGlobalModule(module: any) {
    this.QuillWrapper.register(module, true);
  }

  registerPageModule(module: any) {
    let registry = new Parchment.Registry();
    registry.register(module);
    return registry;
  }

  // newPage return page reference
  newPage(container: HTMLElement) {
    // create new quill instance using registry and push to pages array
    const newPage = new this.QuillWrapper(container, {
      modules: {
        toolbar: false,
        languageTool: {
          apiOptions: {
            level: 'picky',
          },
        },
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
    newPage.style.margin = `${this.config.margin}px auto`;
    newPage.className = 'overflow-auto min-h-full bg-white drop-shadow-lg';
    // append new page to document after last page
    this.getLastPage().container.after(newPage);
    // create new quill instance and push to page list
    const newQuill = PageManager.newQuill(newPage, this.isReadOnly);
    this.pushToPageList(newQuill);
    this.moveCursorToNextPage();
    return newQuill;
  }

  newJSXPageWithData(document: Document, data: Delta, source?: EmitterSource) {
    // padding size
    const { width, height } = PAGE_SIZES[this.config.pageSize];
    const newPage = document.createElement('div');
    newPage.id = `page-${this.pages.length}`;
    newPage.style.width = `${width}mm`;
    newPage.style.height = `${height}mm`;
    newPage.style.margin = `${this.config.margin}px auto`;
    newPage.className = 'overflow-auto min-h-full bg-white drop-shadow-lg';
    // append new page to document after last page
    this.getLastPage().container.after(newPage);
    // create new quill instance and push to page list
    const newQuill = PageManager.newQuill(newPage, this.isReadOnly);
    newQuill.setContents(data, source);
    this.pushToPageList(newQuill);
    this.moveCursorToNextPage();
    return newQuill;
  }

  async savePage() {
    let updateLoading = false;

    if (updateLoading) return;

    const listUnsavedPage = this.pages.filter((page) => !page.saved);
    // descrease image quality
    if (listUnsavedPage.length) {
      // create canvas for document
      html2canvas(this.pages[0].root, {
        scale: 0.5,
      })
        .then(async (canvas) => {
          // convert canvas to image and convert to png
          const dataURL = canvas.toDataURL('image/png');
          // convert to blob and upload to server
          const blob = await fetch(dataURL).then((r) => r.blob());
          const file = new File([blob], `${randomString(20)}.png`, {
            type: 'image/png',
          });
          return file;
        })
        .then(async (file) => {
          const { data } = await useUploadPreviewImgDoc(
            this.sessionId,
            file,
            this.userId
          );
          if (data?.singleUpload.id) {
            await useUpdateDocumentPreviewImage(
              this.sessionId,
              this.documentId,
              data?.singleUpload.id
            );
          }
        });

      updateLoading = true;

      let errors: string[] = [];

      // save document
      try {
        this.handleIsSaveLoading(true);
        await Promise.all(
          listUnsavedPage.map(async (page) => {
            try {
              removeSuggestionBoxes(page);
              await useGetEventDocumentServerRequestSync(
                this.sessionId,
                JSON.stringify(page.getContents()),
                this.documentId,
                null,
                Number(page.container.id.split('-')[1])
              );
              this.pages[Number(page.container.id.split('-')[1])].saved = true;
            } catch (err: any) {
              // Collect all errors
              errors.push(
                `Error updating page ${page.container.id}: ${err.message}`
              );
            }
          })
        );

        if (errors.length === 0) {
        } else {
          toast.error(`Có lỗi xảy ra: ${errors.join(', ')}`);
        }
      } catch {
        toast.error('Có lỗi xảy ra trong quá trình cập nhật.');
      } finally {
        this.handleIsSaveLoading(false);
        updateLoading = false;
      }
    }
  }

  registerEventListener() {
    document.addEventListener('keydown', async (e) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        await this.savePage();
      }
    });
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

  async loadNextWithData(delta: Delta, source?: EmitterSource) {
    return this.newJSXPageWithData(document, delta, source);
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

  registerWithQuill() {
    return new QuillCursors(this.getCurrentPage());
  }

  pushToPageList(page: QuillWrapper) {
    // Initialize QuillCursors
    // const quillCursors = new QuillCursors(page);

    page.root.addEventListener('focus', () => {
      if (this.currentPageIndex !== this.pages.indexOf(page)) {
        this.currentPageIndex = this.pages.indexOf(page);
        // update toolbar
        this.attachToolbarToPage(this.pages.indexOf(page));
      }
    });

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

      this.debounce(async () => {
        try {
          this.handleIsSaveLoading(true);
          await this.savePage();
          this.handleIsSaveLoading(false);
        } catch (error) {
          toast(`Error: ${error}`);
        }
      }, 2000);

      // if (page.container.id !== 'page-0' && page.getLength() === 1) {
      //   console.log('delete page');
      //   console.log(page.container.id);
      //   this.deletePage(this.pages.indexOf(page));
      // }

      // send text change to AI

      page.saved = false;

      this.deltaQueue.push({
        delta: delta,
        documentId: this.documentId,
        pageIndex: this.currentPageIndex,
        cursor: null,
      });
    });

    page.on(EVENT_NAMES.EDITOR_CHANGE, () => {
      // Check if the current page is overflowing
      if (PageManager.isPageOverflowing(page)) {
        console.log('page is overflowing');
        this.trimOverflowingContent(page);
      }
      // update current page index if page index change
    });
    page.on(EVENT_NAMES.SELECTION_CHANGE, (range) => {
      let editor = document.querySelector(
        `#page-${this.currentPageIndex} .ql-editor`
      );
      if (!editor) return;

      if (range) {
        if (this.quillCursors) {
          this.quillCursors.createCursor(
            this.sessionId,
            this.userName,
            this.generateCursorColor(this.sessionId)
          ); // Create cursor with ID "123", name "Khoi", and color "red"
          this.quillCursors.moveCursor(this.sessionId, range); // Move cursor to position (example: start of the editor)
        }

        // if (range.length == 0) {
        //   this.quillCursors?.removeCursor(this.sessionId);
        // } else {
        //   const text = this.getCurrentPage().getText(range.index, range.length);
        //   console.log('text', text);
        // }
        // send selection change to server
        const cursor = this.quillCursors
          ?.cursors()
          .find((cursor) => cursor.id === this.sessionId);
        this.deltaQueue.push({
          delta: null,
          documentId: this.documentId,
          pageIndex: this.currentPageIndex,
          cursor: {
            id: this.sessionId,
            name: this.userName,
            color: cursor?.color || 'blue',
            range: cursor?.range || { index: 0, length: 0 },
          },
        });
      } else {
        this.quillCursors?.removeCursor(this.sessionId);
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

    if (!this.quillCursors) {
      this.quillCursors = new QuillCursors(this.getCurrentPage());
    } else {
      this.quillCursors.removeCursor(this.sessionId);
      this.quillCursors = null;
      this.quillCursors = new QuillCursors(this.getCurrentPage());
      // this.quillCursors.moveCursor(this.sessionId, range)
      // this.registerWithQuill();
    }
  }

  attachToolbarToPage(indexToolbar: number) {
    const listToolBar = document.getElementsByClassName('toolbar-customer');

    if (!this.quillCursors) {
      this.quillCursors = new QuillCursors(this.getCurrentPage());
    } else {
      this.quillCursors.removeCursor(this.sessionId);
      this.quillCursors = null;
      this.quillCursors = new QuillCursors(this.gotoPage(indexToolbar));
      // this.quillCursors.moveCursor(this.sessionId, range)
      // this.registerWithQuill();
    }

    Array.from(listToolBar).forEach((toolbar, index) => {
      if (indexToolbar === index) {
        toolbar.classList.add('display-toolbar');
        toolbar.classList.remove('display-none-toolbar');
      } else {
        toolbar.classList.remove('display-toolbar');
        toolbar.classList.add('display-none-toolbar');
      }
    });
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

  debounce(func: () => void, delay: number) {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      func();
      this.timeoutId = null; // Clear timeout ID after execution
    }, delay);
  }
}
