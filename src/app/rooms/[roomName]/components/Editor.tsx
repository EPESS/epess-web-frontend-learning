'use client';
import { useEffect, useState } from 'react';
import 'quill/dist/quill.snow.css';
import QuillTableBetter from 'quill-table-better';
import 'quill-table-better/dist/quill-table-better.css'
import { gql } from '@apollo/client';
import { useSubscription } from '@apollo/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Baseline, BoldIcon, FileIcon, ImageIcon, ItalicIcon, LinkIcon, MoreHorizontalIcon, PlusIcon, SaveIcon, UnderlineIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Toolbar from 'quill/modules/toolbar';
import Quill, { Parchment } from 'quill';
import { Delta, EmitterSource } from 'quill/core';
import Keyboard from 'quill/modules/keyboard';


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
  SELECTION_CHANGE = 'selection-change'
}
export const PAGE_SIZES = {
  'A4': {
    padding: 10,
    width: 210,
    height: 297
  },
  'Test': {
    padding: 10,
    width: 2100,
    height: 2970
  },
  'A3': {
    padding: 10,
    width: 297,
    height: 420
  },
  'Legal': {
    padding: 10,
    width: 215.9,
    height: 355.6
  },
  'Tabloid': {
    padding: 10,
    width: 1509.36,
    height: 2133.6
  },
  'Letter': {
    padding: 10,
    width: 215.9,
    height: 279.4
  }
};

export type ViewConfig = {
  zoomPercent: number;
}

export const GLOBAL_MARGIN = 10;
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
      zoomPercent: 100
    }
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
  public Quill: typeof Quill;
  public quill: Quill;
  public toolbar: Toolbar;
  public pages: Quill[] = [];
  public currentPageIndex: number = 0;
  public firstPage: HTMLElement;
  public lastPage: HTMLElement;

  constructor(quill: Quill) {
    // initialize config
    this.config = new PageConfiguration('A4', GLOBAL_MARGIN);
    this.Quill = Quill; // Quill class
    this.quill = quill as Quill; // Quill instance
    this.toolbar = quill.getModule('toolbar') as Toolbar; // global toolbar instance
    this.pushToPageList(quill);
    this.firstPage = document.getElementById('page-0') as HTMLElement;
    this.lastPage = document.getElementById(`page-${this.pages.length - 1}`) as HTMLElement;
    // this.deltaManager = new DeltaManager(quill.getContents());
  }
  static newQuill(container: HTMLElement) {
    console.log(`new quill ${container}`);
    return new Quill(container, {
      modules: {
        toolbar: false
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
        toolbar: false
      },
      theme: 'snow'
    });
    this.pushToPageList(newPage);
    // return element and append after page-0
    return {
      container: newPage.container,
      quill: newPage
    }
  }

  newJSXPage(document: Document) {
    const { width, height } = PAGE_SIZES[this.config.pageSize];
    const newPage = document.createElement('div');
    newPage.id = `page-${this.pages.length}`;
    newPage.style.width = `${width}mm`;
    newPage.style.height = `${height}mm`;
    newPage.style.margin = `${this.config.margin}px`;
    // append new page to document after last page
    this.lastPage.after(newPage);
    // create new quill instance and push to page list
    const newQuill = PageManager.newQuill(newPage);
    this.pushToPageList(newQuill);
    return newQuill;
  }


  // deprecated
  newPageWithRegistry(registry: Parchment.Registry) {
    // create new quill instance using registry and push to pages array
    const newPage = new this.Quill(this.quill.container, {
      modules: {
        toolbar: false
      },
      registry: registry,
      theme: 'snow'
    });
    this.pushToPageList(newPage);
    return newPage;
  }

  deletePage(index: number): boolean {
    try {
      this.pages.splice(index, 1);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getCurrentCursor() {
    const currentPosition: number = Number(this.getCurrentPage().getSelection()?.index) || 0;
    return currentPosition;
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
  static attachToEditor(editor: Quill) {
  }

  pushToPageList(page: Quill) {
    // pre push section
    // register event listener
    page.on(EVENT_NAMES.TEXT_CHANGE, (eventName, ...args) => {
      // console.log(eventName, args);
      // print current page
      // console.log(page);
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
    });
    page.on(EVENT_NAMES.SELECTION_CHANGE, (eventName, ...args) => {
      // console.log(eventName, args);
      if (args[0] !== null) return;
      // update current page index
      this.currentPageIndex = this.pages.indexOf(page);
      // console.log(this.currentPageIndex);
    });
    // push to page list
    this.pages.push(page);
    // post push
    this.lastPage = this.pages[this.pages.length - 1].container;
  }

  trimOverflowingContent(page: Quill) {
    // calculate overflow content in delta, delete overflow content and apply delta to next page
    const overflowContent = page.getContents();
    const pageHeight = page.root.clientHeight;
    let contentHeight = 0;
    let deleteIndex = 0;

    const lines = page.getLines();
    const effectivePageHeight = page.root.clientHeight - ((this.config.margin * 2) + (this.config.padding * 2)) - 1;

    console.log(`effectivePageHeight: ${effectivePageHeight}`);
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      contentHeight += line.domNode.offsetHeight;
      console.log(`contentHeight: ${contentHeight}`);
      if (contentHeight >= effectivePageHeight) {
        deleteIndex = page.getIndex(line);
        break; // Break the loop
      }
    }

    if (deleteIndex > 0) {
      const overflowDelta = overflowContent.slice(deleteIndex);
      page.deleteText(deleteIndex, overflowContent.length() - deleteIndex, Quill.sources.SILENT);
      // apply overflow delta to next page
      this.nextPage().updateContents(overflowDelta, Quill.sources.SILENT);
    }
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
            const newPageManager = new PageManager(PageManager.newQuill(pageElement));
            setPageManager(newPageManager);
            PageManager.attachToEditor(newPageManager.getCurrentPage());
            observer.disconnect();
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [pageManager]);


  const handleZoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setZoomLevel(parseFloat(event.target.value));
  };


  // handle delete character, if last character of last page, delete page
  const handleDeleteCharacter = () => {
    if (pageManager) {
      const lastPage = pageManager.lastPage;
      const lastPageContent = lastPage.innerText;
      if (lastPageContent.length === 1) {
        pageManager.deletePage(pageManager.pages.length - 1);
      }
    }
  }

  return (
    <div className='h-full w-full flex'>
      {/* editor */}
      <div className='w-2/3 flex flex-col h-auto overflow-hidden'>
        <div className='flex flex-col'>
          <div className='bg-white h-14 w-full flex items-center gap-2 p-2'>
            {/* logo */}
            <Avatar className='w-10 h-10'>
              <AvatarImage src="https://objects.epess.org/epess-public/main_icon.png" />
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
                <Button variant='ghost' className='h-6 px-0'>File</Button>
                <Button variant='ghost' className='h-6 px-0'>Edit</Button>
                <Button variant='ghost' className='h-6 px-0'>View</Button>
                <Button variant='ghost' className='h-6 px-0'>Share</Button>
                <Button variant='ghost' className='h-6 px-0'>Help</Button>
              </div>

            </div>

          </div>
          <div>
            {/* test apply delta */}
            <Button variant='ghost' className='h-6 px-0' onClick={() => {
              if (pageManager) {
                pageManager.applyDelta(new Delta(
                  [
                    // retain current cursor
                    { retain: pageManager.getCurrentCursor() },
                    { insert: 'Hello, world!' }
                  ]
                ), pageManager.currentPageIndex, Quill.sources.USER);
              }
            }}>Apply Delta</Button>
          </div>
          <div>
            {/* Zoom control */}
            <select onChange={handleZoomChange} value={zoomLevel.toString()} className='bg-white'>
              <option value="0.5">50%</option>
              <option value="0.75">75%</option>
              <option value="1">100%</option>
              <option value="1.25">125%</option>
              <option value="1.5">150%</option>
              <option value="2">200%</option>
            </select>
          </div>
          {/*quilljs toolbar */}
          <div className='flex justify-center items-center gap-3 w-full bg-gray-300 rounded-3xl p-1'>
            {/* caption control eg normal, h1, h2, h3, h4, h5, h6  */}
            <div>
              <select className='h-6 border border-gray-300 rounded bg-white'>
                <option value='normal'>Normal</option>
                <option value='h1'>Heading 1</option>
                <option value='h2'>Heading 2</option>
                <option value='h3'>Heading 3</option>
                <option value='h4'>Heading 4</option>
                <option value='h5'>Heading 5</option>
                <option value='h6'>Heading 6</option>
              </select>
            </div>
            <div>
              <Input type='text' placeholder='Caption' />
            </div>
            {/* font family control */}
            <div>
              <select className='h-6 border border-gray-300 rounded bg-white'>
                <option value='Arial'>Arial</option>
                <option value='Courier New'>Courier New</option>
                <option value='Georgia'>Georgia</option>
                <option value='Times New Roman'>Times New Roman</option>
                <option value='Verdana'>Verdana</option>
              </select>
            </div>
            {/* font size control */}
            <div className='flex items-center gap-3 h-6 '>
              <div className='flex items-center gap-3 h-6'>
                <Button variant='ghost' className='h-6 px-0'>
                </Button>
                <select className='h-6 border border-gray-300 rounded bg-white'>
                  <option value='12'>12</option>
                  <option value='14'>14</option>
                  <option value='16'>16</option>
                  <option value='18'>18</option>
                  <option value='20'>20</option>
                  <option value='24'>24</option>
                  <option value='28'>28</option>
                  <option value='32'>32</option>
                  <option value='36'>36</option>
                  <option value='48'>48</option>
                  <option value='60'>60</option>
                  <option value='72'>72</option>
                </select>
              </div>
            </div>
            {/* bold */}
            <div className='flex items-center gap-3 h-6'>
              <Button variant='ghost' className='h-6 px-0'>
                <BoldIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='h-6 px-0'>
                <ItalicIcon className='w-4 h-4' />
              </Button>
            </div>
            <div>
              <Button variant='ghost' className='h-6 px-0'>
                <UnderlineIcon className='w-4 h-4' />
              </Button>
            </div>
            {/* text color picker */}
            <div>
              <Button variant='ghost' className='h-6 px-0'>
                <Baseline className='w-4 h-4' />
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
                      <span>Sub Menu</span>
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
        <div className='pb-20 min-h-[calc(100vh-10rem)] flex justify-center pt-4 px-32 overflow-auto h-auto ' style={{
          width: '100%', scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1'
        }} >
          <div className=''>
            <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}>
              <div id='page-0' style={{ width: `${PAGE_SIZES[pageConfig.pageSize].width}mm`, height: `${PAGE_SIZES[pageConfig.pageSize].height}mm`, margin: `${pageConfig.margin}px` }} /> {/* quill editor */}
            </div>

            {/* new page button */}
            <Button variant='ghost' className='h-6 px-0' onClick={() => {
              if (pageManager) {
                pageManager.newJSXPage(document);
              }
            }}>
              <PlusIcon className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-blue-400 w-1/3 h-full flex flex-col'>
        {/* video call */}
        <div className='bg-red-400 h-1/3'>

        </div>
        {/* chat */}
        <div className='bg-green-400 h-2/3'>

        </div>
      </div>
    </div >
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