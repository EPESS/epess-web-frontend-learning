'use client';
import { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
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
  EDITOR_UNFOCUS = 'editor-unfocus'
}
export const PAGE_SIZES = {
  'A4': {
    width: 210,
    height: 297
  },
  'A3': {
    width: 297,
    height: 420
  },
  'Legal': {
    width: 215.9,
    height: 355.6
  },
  'Tabloid': {
    width: 1509.36,
    height: 2133.6
  },
  'Letter': {
    width: 215.9,
    height: 279.4
  }
};
export class PageConfiguration {
  public toolbar: Toolbar;
  public keyboard: Keyboard;
  public pageSize: string;
  constructor(toolbar: Toolbar, keyboard: Keyboard, pageSize: string) {
    this.toolbar = toolbar;
    this.keyboard = keyboard;
    this.pageSize = pageSize;
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
  public Quill: typeof Quill;
  public quill: Quill;
  public toolbar: Toolbar;
  public pages: Quill[] = [];
  public currentPageIndex: number = 0;

  constructor(quill: Quill) {
    this.Quill = Quill; // Quill class
    this.quill = quill as Quill; // Quill instance
    this.toolbar = quill.getModule('toolbar') as Toolbar; // global toolbar instance
    // this.deltaManager = new DeltaManager(quill.getContents());
  }
  static newDefaultQuill() {
    return new Quill(document.getElementById('page-0') as HTMLElement);
  }
  static newQuill(container: HTMLElement) {
    console.log(`new quill ${container}`);
    return new Quill(container);
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
  newPage() {
    // create new quill instance using registry and push to pages array
    const newPage = new this.Quill(this.quill.container, {
      modules: {
        toolbar: false
      }
    });
    this.pages.push(newPage);
    return newPage;
  }

  newPageWithRegistry(registry: Parchment.Registry) {
    // create new quill instance using registry and push to pages array
    const newPage = new this.Quill(this.quill.container, {
      modules: {
        toolbar: false
      },
      registry: registry
    });
    this.pages.push(newPage);
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

  gotoPage(index: number) {
    this.currentPageIndex = index;
  }

  getCurrentPage() {
    console.log(this.pages);
    return this.pages[this.currentPageIndex];
  }

  nextPage() {
    this.currentPageIndex++;
    return this.getCurrentPage();
  }

  previousPage() {
    this.currentPageIndex--;
    return this.getCurrentPage();
  }

  applyDelta(delta: Delta, pageIndex: number, source?: EmitterSource) {
    if (!source) {
      source = Quill.sources.SILENT;
    }
    this.pages[pageIndex].updateContents(delta, source);
    // todo: update delta manager
  }
  static attachToEditor(editor: Quill) {
    // first detach from current editor
    // editor.detach();
    editor.on(EVENT_NAMES.EDITOR_FOCUS, () => {
      console.log('editor focused');
    });
  }

}

export default function Editor() {
  const [pageManager, setPageManager] = useState<PageManager | null>(null);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const pageElement = document.getElementById('page-0');
          if (pageElement && !pageManager) {
            const newPageManager = new PageManager(PageManager.newDefaultQuill());
            setPageManager(newPageManager);
            debugger;
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

  return (
    <div className='h-full w-full flex'>
      {/* editor */}
      <div className='w-2/3 h-full flex flex-col'>
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

        <div className='pb-20 min-h-screen flex justify-center pt-4 px-32  overflow-auto' style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
          <div className='overflow-auto' style={{ width: '100%', scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <div id='page-0' /> {/* quill editor */}
            {/* new page button */}
            <Button variant='ghost' className='h-6 px-0' onClick={() => {
              // PageManager.attachToEditor(pageManager.getCurrentPage());
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