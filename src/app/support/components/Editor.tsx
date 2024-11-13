'use client';
import { useEffect, useState } from 'react';
import 'quill/dist/quill.snow.css';
import QuillTableBetter from 'quill-table-better';
import 'quill-table-better/dist/quill-table-better.css';
import { gql } from '@apollo/client';
import { useSubscription } from '@apollo/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Baseline,
  BoldIcon,
  CodeIcon,
  FileIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  MoreHorizontalIcon,
  PlusIcon,
  RemoveFormatting,
  RemoveFormattingIcon,
  SaveIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Toolbar from 'quill/modules/toolbar';
import Quill, { Parchment } from 'quill';
import { Delta, EmitterSource } from 'quill/core';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

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
export class PageManager {
  public config: PageConfiguration;
  private Quill: typeof Quill;
  public _toolbar: Toolbar | undefined;
  public pages: Quill[] = [];
  public _currentPageIndex: number = 0;

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


  constructor(quill: Quill) {
    // initialize config
    this.config = new PageConfiguration('A4', GLOBAL_MARGIN);
    this.Quill = Quill; // Quill class
    this.pushToPageList(quill);
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
  applyDelta(delta: Delta, pageIndex: number, source?: EmitterSource) {
    if (!source) {
      source = Quill.sources.SILENT;
    }
    this.pages[pageIndex].updateContents(delta, source);
    // todo: update delta manager
  }

  pushToPageList(page: Quill) {
    // pre push section
    // register event listener
    page.on(EVENT_NAMES.TEXT_CHANGE, (eventName, ...args) => {
      if (page.container.id !== 'page-0' && page.getLength() === 1) {
        console.log('delete page');
        console.log(page.container.id);
        this.deletePage(this.pages.indexOf(page));
      }
    });
    // catch scroll event
    page.on(EVENT_NAMES.SCROLL_UPDATE, (eventName, ...args) => {
      console.log(eventName, args);
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

export default function Editor() {
  const [pageManager, setPageManager] = useState<PageManager | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const pageConfig = new PageConfiguration('A4', GLOBAL_MARGIN);

  useEffect(() => {
    // initialize page config
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const pageElement = document.getElementById('page-0');
          if (pageElement && !pageManager) {
            const newPageManager = new PageManager(
              PageManager.newQuill(pageElement)
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
  }, [pageManager]);

  // const handleZoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setZoomLevel(parseFloat(event.target.value));
  // };

  // handle delete character, if last character of last page, delete page
  // const handleDeleteCharacter = () => {
  //   if (pageManager) {
  //     const lastPage = pageManager.getLastPage();
  //     const lastPageContent = lastPage.getText();
  //     if (lastPageContent.length === 1) {
  //       pageManager.deletePage(pageManager.pages.length - 1);
  //     }
  //   }
  // };

  return (
    <div className='h-full w-full flex'>
      {/* editor */}
      <div className='w-full flex flex-col max-h-screen h-screen'>
        {/* tool bar */}
        <div id='toolbar' className='flex flex-col z-10'>
          <div className='bg-white h-14 w-full flex items-center gap-2 p-2'>
            {/* logo */}
            <Avatar className='w-10 h-10'>
              <AvatarImage src='https://objects.epess.org/epess-public/main_icon.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* title */}
            <div className='flex flex-col '>
              {/* File name input */}
              <div className='flex items-center gap-4 h-6'>
                <Input className='h-6' type='text' placeholder='Untitled' />
                <Button variant='outline' className='h-6'>
                  {/* save icon and indicator */}
                  <SaveIcon className='w-4 h-4' />
                  <span className='w-4 h-4 rounded-full bg-green-500 animate-pulse'></span>
                </Button>
              </div>
              {/* Menu bar */}
              <div className='flex items-center gap-3 h-6'>
                <Button variant='ghost' className='h-6 px-0'>
                  File
                </Button>
                <Button variant='ghost' className='h-6 px-0'>
                  Edit
                </Button>
                <Button variant='ghost' className='h-6 px-0'>
                  View
                </Button>
                <Button variant='ghost' className='h-6 px-0'>
                  Share
                </Button>
                <Button variant='ghost' className='h-6 px-0'>
                  Help
                </Button>
              </div>
            </div>
          </div>
          <div>
            {/* test apply delta */}
            {/* <Button
              variant='ghost'
              className='h-6 px-0'
              onClick={() => {
                if (pageManager) {
                  pageManager.applyDelta(
                    new Delta([
                      // retain current cursor
                      { retain: pageManager.getCurrentCursor() },
                      { insert: 'Hello, world!' },
                    ]),
                    pageManager.currentPageIndex,
                    Quill.sources.USER
                  );
                }
              }}
            >
              Apply Delta
            </Button> */}
          </div>
          {/* <div>
      
            <select
              onChange={handleZoomChange}
              value={zoomLevel.toString()}
              className='bg-white'
            >
              <option value='0.5'>50%</option>
              <option value='0.75'>75%</option>
              <option value='1'>100%</option>
              <option value='1.25'>125%</option>
              <option value='1.5'>150%</option>
              <option value='2'>200%</option>
            </select>
          </div> */}
          {/*quilljs toolbar */}
          <div id='toolbar' className='flex justify-center items-center gap-3 w-full bg-gray-100 shadow-2xl rounded-3xl p-1 mb-1 mt-1'>
            {/* caption control eg normal, h1, h2, h3, h4, h5, h6  */}
            <Separator orientation="vertical" />
            <div>
              <Select>
                <SelectTrigger className="h-6 w-[100px]">
                  <SelectValue placeholder="Normal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className='ql-normal' value='normal'>Normal</SelectItem>
                  <SelectItem className='ql-h1' value='h1'>Heading 1</SelectItem>
                  <SelectItem className='ql-h2' value='h2'>Heading 2</SelectItem>
                  <SelectItem className='ql-h3' value='h3'>Heading 3</SelectItem>
                  <SelectItem className='ql-h4' value='h4'>Heading 4</SelectItem>
                  <SelectItem className='ql-h5' value='h5'>Heading 5</SelectItem>
                  <SelectItem className='ql-h6' value='h6'>Heading 6</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator orientation="vertical" />
            {/* font family control */}
            <div>
              {/* use font size style */}
              <Select>
                <SelectTrigger className="h-6 w-[100px]">
                  <SelectValue placeholder="Font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Courier New'>Courier New</SelectItem>
                  <SelectItem value='Georgia'>Georgia</SelectItem>
                  <SelectItem value='Times New Roman'>Times New Roman</SelectItem>
                  <SelectItem value='Verdana'>Verdana</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator orientation="vertical" />
            {/* font size control */}
          
            <div className='flex items-center gap-3 h-6 '>
          
            {/* font size */}
                {/* add default value is large */}
                <Select>
                  <SelectTrigger className="h-6 w-[100px]">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">small</SelectItem>
                    <SelectItem value="false">normal</SelectItem>
                    <SelectItem value="large" >large</SelectItem>
                    <SelectItem value="huge">huge</SelectItem>
                  </SelectContent>
                </Select>
           
            </div>
            <Separator orientation="vertical" />
            {/* clear format */}
            <div>
              <Button variant='ghost' className='ql-clean h-6 px-0'>
                <RemoveFormatting className='w-4 h-4' />
              </Button>
            </div>
            {/* bold */}
            <div className='flex items-center gap-3 h-6'>
              <Button variant='ghost' className='ql-bold h-6 px-0'>
                <BoldIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='ql-italic h-6 px-0'>
                <ItalicIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='ql-underline h-6 px-0'>
                <UnderlineIcon className='w-4 h-4' />
              </Button>
            </div>
            <Separator orientation="vertical" />
            <div>
              <Button variant='ghost' className='ql-strike h-6 px-0'>
                <StrikethroughIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* text color picker */}
            <div>
              <Button variant='ghost' className='h-6 px-0'>
                <Baseline className='w-4 h-4' />
                {/* color picker */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='ghost' className='h-6 px-0'>
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
              <Button variant='ghost' className='h-6 px-0'>
                <LinkIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* insert image */}
            <div>
              <Button variant='ghost' className='h-6 px-0'>
                <ImageIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* code block */}
            <div>
              <Button variant='ghost' className='ql-code-block h-6 px-0'>
                <CodeIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* more options */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='h-6 px-0'>
                  <MoreHorizontalIcon className='w-4 h-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Button variant='ghost' className='h-6 px-0'></Button>
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
        <div className='z-0 bg-gray-50 flex justify-center pt-4 px-32 h-screen overflow-y-scroll no-scrollbar rounded-lg'>
          <div
            className='overflow-auto min-h-full pb-56 no-scrollbar'
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top left',
            }}
          >
            <div
              id='page-0'
              className='overflow-auto min-h-full bg-white drop-shadow-lg'
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

// handleOverflowContentToNextPage()
// handleDeleteContentToPreviousPage()

// this.quill.on("editor-change", (eventName, ...args) =>
//   {
//     if(this.quill.getSelection())
//     {
//       this.currentFormats = this.quill.getFormat();
//     }
//   });

// format(format, params)
// {
// 	if(this.currentFormats[format] && (!params || this.currentFormats[format] == params))
// 	{
// 		this.quill.format(format, false, Quill.sources.USER);
// 	}
// 	else
// 	{
// 		this.quill.format(format, params, Quill.sources.USER)
// 	}
// }
