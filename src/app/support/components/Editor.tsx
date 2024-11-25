'use client';

import { ChangeEvent, MouseEventHandler, useEffect, useMemo, useState } from 'react';
import 'quill/dist/quill.snow.css';
import QuillTableBetter from 'quill-table-better';
import 'quill-table-better/dist/quill-table-better.css';
import { ApolloClient, gql } from '@apollo/client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { clientWS as createClientWS, createApolloClient } from '@/providers/apolloClient'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  Baseline,
  BoldIcon,
  CodeIcon,
  DownloadIcon,
  FileIcon,
  FolderOpenIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  MoreHorizontalIcon,
  RemoveFormatting,
  SaveIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Toolbar from 'quill/modules/toolbar';
import Quill, { Parchment } from 'quill';
import { Delta, EmitterSource } from 'quill/core';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@clerk/nextjs';
import { Client } from 'graphql-ws';
import Ruler from './Ruler';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { DropdownMenuCheckboxes } from '@/components/ui/dropdownMenuCheckboxes';
import { useCreateDocument } from '@/app/api/document';

export const EDITOR_TOOLBAR_BINDINGS = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['image', 'video'],
  // ['table-better']
];
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

export const GLOBAL_MARGIN = 30;
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

const DOC_ID = 'test';
export class PageManager {
  public config: PageConfiguration;
  private Quill: typeof Quill;
  public _toolbar: Toolbar | undefined;
  public pages: Quill[] = [];
  public _currentPageIndex: number = 0;
  public subscription: any;
  public clientHTTP: ApolloClient<any>;
  public clientWS: Client;
  public deltaQueue: DeltaQueue;

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
    for await (const result of this.clientWS.iterate<{ document: { delta: string, documentId: string, pageIndex: number } }>({
      query: `subscription Document {
  document(documentId: "${documentId}") {
      delta
      documentId
      pageIndex
  }
}`
    })) {
      if (result?.data?.document) {
        // this.pages[result?.data?.document?.pageIndex].updateContents(JSON.parse(result.data?.document.delta), Quill.sources.SILENT);
        this.applyDelta(JSON.parse(result.data?.document.delta), result?.data?.document?.pageIndex, Quill.sources.API);
      }
    }
  }

  constructor(quill: Quill, clientHTTP: ApolloClient<any>, clientWS: Client, deltaQueue: DeltaQueue) {
    // initialize config
    this.config = new PageConfiguration('A4', GLOBAL_MARGIN);
    this.Quill = Quill; // Quill class
    this.pushToPageList(quill);
    this.clientHTTP = clientHTTP;
    this.clientWS = clientWS;
    this.deltaQueue = deltaQueue;
    this.subscribeDocument(DOC_ID)
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
        documentId: DOC_ID,
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

export interface DocumentDeltaInput {
  delta: Delta;
  documentId: string;
  pageIndex: number;
}
class DeltaQueue {
  private queue: DocumentDeltaInput[] = [];

  constructor(private clientHTTP: ApolloClient<any>) {

  }

  async emit(): Promise<void> {
    while (this.queue.length > 0) {
      const data = this.pop();
      if (!data) continue;
      console.log(data);
      const { delta, documentId, pageIndex } = data;
      const deltaStr = JSON.stringify(delta);
      // handle send delta to server  
      await this.clientHTTP.mutate({
        mutation: gql`
          mutation UpdateDocument($data: DocumentDeltaInput!) {
            updateDocument(data: $data) {
              delta
              documentId 
              pageIndex
            }
          }
        `,
        variables: {
          data: {
            delta: deltaStr,
            documentId,
            pageIndex
          }
        }
      });
    }
    await new Promise(resolve => setTimeout(resolve, 200));
    await this.emit();
  }

  push(delta: DocumentDeltaInput) {
    this.queue.push(delta);
  }

  pop() {
    return this.queue.shift();
  }
}

const getPaddingSize = (size: string) => {
  const paddingSize = parseInt(size);
  const style = {
    10: 'px-10',
    14: 'px-14',
    24: 'px-24',
    28: 'px-28',
    32: 'px-32',
    36: 'px-36',
    40: 'px-40',
    48: 'px-48'
  }
  return style[paddingSize] || 'px-10';
}

export default function Editor() {
  const [pageManager, setPageManager] = useState<PageManager | null>(null);
  const [paddingSize, setPaddingSize] = useState('10');
  const { sessionId } = useAuth();
  const clientHTTP = useMemo(() => createApolloClient(sessionId!), [sessionId]);
  const clientWS = useMemo(() => createClientWS(sessionId!), [sessionId]);
  const deltaQueue = new DeltaQueue(clientHTTP);
  const [zoomLevel, setZoomLevel] = useState(1);
  const pageConfig = new PageConfiguration('A4', GLOBAL_MARGIN);
  const [headerValue, setHeaderValue] = useState('default');
  const [showHeaders, setShowHeaders] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState<string>("Normal");
  const handleSelectHeader = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setHeaderValue(event.target.value);
  }
  (async () => {
    deltaQueue.emit();
  })();

  useEffect(() => {
    // initialize page config
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const pageElement = document.getElementById('page-0');
          if (pageElement && !pageManager) {
            const newPageManager = new PageManager(
              PageManager.newQuill(pageElement),
              clientHTTP,
              clientWS,
              deltaQueue
            );
            setPageManager(newPageManager);
            // attach toolbar to page
            newPageManager.attachToolbarToPage(0);
            observer.disconnect();
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [clientHTTP, clientWS, pageManager, deltaQueue]);

  const [createDocument, { loading: loadingNewFile }] = useCreateDocument()

  const handleNewFile = () => {
    if (loadingNewFile) return;
    createDocument()
  }

  const handleFileEvent = (value: string) => {
    switch (value) {
      case "new": {
        handleNewFile()
        break;
      }
      case "open": {

        break;
      }
      case "save": {

        break;
      }
      case "export": {

        break;
      }

      default:
        break;
    }
  }

  return (
    <div className='flex w-full h-full'>
      {/* editor */}
      <div className='flex flex-col w-full h-screen max-h-screen'>
        {/* tool bar */}
        <div id='toolbar' className='z-10 flex flex-col'>
          <div className='flex items-center gap-2 bg-white p-2 w-full h-14'>
            {/* logo */}
            <Avatar className='mr-2 w-10 h-10'>
              <AvatarImage src='https://objects.epess.org/epess-public/main_icon.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* title */}
            <div className='flex flex-col'>
              {/* File name input */}
              <div className='flex items-center gap-4 h-6'>
                <Input className='h-6' type='text' placeholder='Untitled' />
                <span className='bg-green-500 p-0 rounded-full w-4 h-4'></span>
              </div>
              {/* Menu bar */}
              <div className='flex items-center gap-3 h-6'>
                <DropdownMenuCheckboxes
                  buttonLabel={
                    <Button variant='ghost' className='px-0 h-6'>
                      File
                    </Button>}
                  handleOnChange={(value) => handleFileEvent(value as string)}
                  options={[
                    { label: "New", value: "new" },
                    { label: "Open", value: "open" },
                    { label: "Save", value: "save" },
                    { label: "Export", value: "export" }
                  ]}
                />
                <Button variant='ghost' className='px-0 h-6'>
                  Edit
                </Button>
                <Button variant='ghost' className='px-0 h-6'>
                  View
                </Button>
                <Button variant='ghost' className='px-0 h-6'>
                  Share
                </Button>
                <Button variant='ghost' className='px-0 h-6'>
                  Help
                </Button>
              </div>
            </div>
          </div>
          <div>

          </div>

          {/*quilljs toolbar */}
          <div id='toolbar' className='flex justify-center items-center gap-3 bg-gray-100 shadow-2xl mt-1 mb-1 p-1 rounded-3xl w-full'>
            {/* caption control eg normal, h1, h2, h3, h4, h5, h6  */}
            <div className='flex flex-col items-center gap-3 h-6'>
              <Button variant='ghost' className='px-0 h-6 ql-header' value="">
                <span className='ql-header'>Normal</span>
              </Button>

            </div>
            {/* select will change padding option of the page have 10, 12, 14, 16, 18, 20, 24, 36, 48 */}
            <div className='flex items-center gap-3 h-6'>
              <Select onValueChange={(value) => setPaddingSize(value)} defaultValue="10">
                <SelectTrigger className="h-6">
                  <SelectValue placeholder="Chọn kích thước" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="14">14</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="28">28</SelectItem>
                  <SelectItem value="32">32</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                  <SelectItem value="48">48</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator orientation="vertical" />
            <div>
              {/* use select to change header */}
              <select
                className='border-input bg-white px-2 border rounded-md focus:ring-2 focus:ring-ring focus:ring-offset-2 w-[100px] h-6 text-sm ql-header focus:outline-none'
                value={headerValue}
                onChange={handleSelectHeader}
              >
                <option value="">Normal</option>
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
                <option value="h4">Heading 4</option>
                <option value="h5">Heading 5</option>
                <option value="h6">Heading 6</option>
              </select>

              {/* Add click outside listener */}
              {showHeaders && (
                <div
                  className="z-40 fixed inset-0"
                  onClick={() => setShowHeaders(false)}
                />
              )}

            </div>
            <Separator orientation="vertical" />
            <div className='flex items-center gap-3 h-6'>
              {/* font size */}
              {/* add default value is large */}
              <select className='border-input bg-white px-2 border rounded-md focus:ring-2 focus:ring-ring focus:ring-offset-2 w-[100px] h-6 text-sm ql-size focus:outline-none'>
                <option value="small">small</option>
                <option value="">normal</option>
                <option value="large">large</option>
                <option value="huge">huge</option>
              </select>

            </div>
            <Separator orientation="vertical" />
            {/* clear format */}
            <div>
              <Button variant='ghost' className='px-0 h-6 ql-clean'>
                <RemoveFormatting className='w-4 h-4' />
              </Button>
            </div>
            {/* bold */}
            <div className='flex items-center gap-3 h-6'>
              <Button variant='ghost' className='px-0 h-6 ql-bold'>
                <BoldIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='px-0 h-6 ql-italic'>
                <ItalicIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='px-0 h-6 ql-underline'>
                <UnderlineIcon className='w-4 h-4' />
              </Button>
            </div>
            <Separator orientation="vertical" />

            <div>
              <Button variant='ghost' className='px-0 h-6 ql-align' value="">
                <AlignLeftIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='px-0 h-6 ql-align' value="center">
                <AlignCenterIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='px-0 h-6 ql-align' value="right">
                <AlignRightIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='px-0 h-6 ql-align' value="justify">
                <AlignJustifyIcon className='w-4 h-4' />
              </Button>
            </div>
            <Separator orientation="vertical" />
            {/* strike */}
            <div>
              <Button variant='ghost' className='px-0 h-6 ql-strike'>
                <StrikethroughIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* text color picker */}
            <div>
              <Button variant='ghost' className='px-0 h-6'>
                <Baseline className='w-4 h-4' />
                {/* color picker */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='ghost' className='px-0 h-6'>
                      <MoreHorizontalIcon className='w-4 h-4' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div>
                      <Input type='color' />
                    </div>
                  </PopoverContent>
                </Popover>
              </Button>
            </div>
            {/* hyperlink */}
            <div>
              <Button variant='ghost' className='px-0 h-6'>
                <LinkIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* insert image */}
            <div>
              <Button variant='ghost' className='px-0 h-6'>
                <ImageIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* code block */}
            <div>
              <Button variant='ghost' className='ql-code-block px-0 h-6'>
                <CodeIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* more options */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='px-0 h-6'>
                  <MoreHorizontalIcon className='w-4 h-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Button variant='ghost' className='px-0 h-6'></Button>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Sub Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Sub Option 2</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* maintain min height equal to page size * 1.5 */}
        <div className='z-0 flex justify-center bg-gray-50 px-20 pt-4 rounded-lg w-full h-screen overflow-y-scroll no-scrollbar'>
          <div
            className='pb-56 min-h-full overflow-x-hidden overflow-y-auto no-scrollbar'
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top left',
            }}
          >

            <div
              id='page-0'
              // add padding size based on padding size state
              // add cn to get padding size 
              // className={cn('bg-white drop-shadow-lg min-h-full overflow-x-hidden overflow-y-auto', getPaddingSize(paddingSize))}
              className='bg-white drop-shadow-lg min-h-full overflow-x-hidden overflow-y-auto'
              style={{
                width: `${PAGE_SIZES[pageConfig.pageSize].width}mm`,
                height: `${PAGE_SIZES[pageConfig.pageSize].height}mm`,
                margin: `${pageConfig.margin}px`,
              }}
            />{' '}
            {/* quill editor */}
          </div>
        </div>
      </div>
    </div>
  );
}

