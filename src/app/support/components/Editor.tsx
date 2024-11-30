'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css';
import 'quill-table-better/dist/quill-table-better.css';

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
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  MoreHorizontalIcon,
  RemoveFormatting,
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@clerk/nextjs';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { DropdownMenuCheckboxes } from '@/components/ui/dropdownMenuCheckboxes';
import { useAddCollaborator, useCreateDocument } from '@/app/api/document';
import DeltaQueue from './EditorClass/DeltaQueue';
import { GLOBAL_MARGIN, PageConfiguration } from './EditorClass';
import PageManager, { PAGE_SIZES } from './EditorClass/PageManagerClass';
import { TCollaborationSessionResponse } from '@/app/api/support-room';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useUpdateActiveDocumentId } from '@/app/api/document/updateActiveDocument';
import { toast } from 'react-toastify';
import { useUpdateDocument } from '@/app/api/document/updateDocument';
import { TCollaborationSessionUpdated, useGetCollaborationSessionUpdated } from '@/app/api/support-room/collaborationSessionUpdated';
import { useGetEventDocumentClientRequestSync } from '@/app/api/document/eventDocumentClientRequestSync';
import { ScrollArea } from '@/components/ui/scroll-area';



export const EDITOR_TOOLBAR_BINDINGS = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['image', 'video'],
  // ['table-better']
];

// const getPaddingSize = (size: string) => {
//   const paddingSize = parseInt(size);
//   const style = {
//     10: 'px-10',
//     14: 'px-14',
//     24: 'px-24',
//     28: 'px-28',
//     32: 'px-32',
//     36: 'px-36',
//     40: 'px-40',
//     48: 'px-48'
//   }
//   return style[paddingSize] || 'px-10';
// }

type TEditor = {
  collaborationId: string,
  loading?: boolean,
  data: TCollaborationSessionResponse | undefined,
  handleRefetch: () => void
}

export default function Editor({ collaborationId, loading, data, handleRefetch }: TEditor) {

  const [page, setPage] = useState(0)

  const { data: documentData, loading: documentLoading, fetchMore } = useGetEventDocumentClientRequestSync(data?.collaborationSession.activeDocumentId ?? "", page)

  const [createDocument, { loading: loadingNewFile }] = useCreateDocument(collaborationId)

  const [updateActiveDocument, { loading: loadingUpdateActiveDocument }] = useUpdateActiveDocumentId()

  const [updateDocument, { loading: loadingUpdateDocument }] = useUpdateDocument()

  const [addCollaborator, { loading: loadingAddCollaborator }] = useAddCollaborator()

  const [title, setTitle] = useState(data?.collaborationSession?.activeDocument?.name)
  const [documentId, setDocumentId] = useState(data?.collaborationSession.activeDocumentId)
  const [paddingSize, setPaddingSize] = useState('10');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [headerValue, setHeaderValue] = useState('default');
  const [showHeaders, setShowHeaders] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState<string>("Normal");

  const documentRef = useRef<HTMLDivElement | null>(null)
  const pageElement = useRef<HTMLDivElement | null>(null)
  const documentLoadingRef = useRef<boolean>(documentLoading)

  const { userId, sessionId } = useAuth();

  const clientHTTP = useMemo(() => createApolloClient(sessionId!), [sessionId]);
  const clientWS = useMemo(() => createClientWS(sessionId!), [sessionId]);

  const deltaQueue = new DeltaQueue(clientHTTP);
  const pageConfig = new PageConfiguration('A4', GLOBAL_MARGIN);


  const newPageManagerRef = useRef<PageManager | null>(null)

  useEffect(() => {
    documentLoadingRef.current = documentLoading
  }, [documentLoading])

  useEffect(() => {
    if (newPageManagerRef.current) return

    if (pageElement.current) {
      newPageManagerRef.current = new PageManager(
        sessionId ?? "",
        userId ?? "",
        documentId ?? "",
        PageManager.newQuill(pageElement.current),
        clientHTTP,
        clientWS,
        deltaQueue
      )
    }
  }, [pageElement])

  const handleSelectHeader = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHeaderValue(event.target.value);
  }

  const handleNewFile = async () => {
    if (loadingNewFile) return;
    if (loadingUpdateActiveDocument) return;
    const dataCreateDocument = await createDocument({
      onCompleted: (data) => {
        setDocumentId(data.createDocument.id)
        updateActiveDocument({
          variables: {
            activeDocumentId: data.createDocument.id,
            collaborationSessionId: collaborationId
          },
          onCompleted: () => {
            handleRefetch()
            toast.success("Tạo file thành công")
          },
          onError: (error) => {
            toast.error(error.message)
          },
        }
        )
      }
    })

    if (data?.collaborationSession?.collaboratorsIds?.length === 2) {
      data?.collaborationSession.collaboratorsIds.map((id: string) => {
        if (dataCreateDocument.data?.createDocument) {
          addCollaborator({
            variables: {
              documentId: dataCreateDocument.data.createDocument.id,
              userId: id
            },
            onError() {
              toast.error(`Không thể thêm ${userId === id ? "bạn" : "giảng viên"} vào tài liệu`)
            },
          })
        }
      })
    }
  }

  const handleNewFileSubscription = (data: TCollaborationSessionUpdated) => {
    console.log("hahahahaha", data.collaborationSessionUpdated);
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

  const handleChangeName = () => {
    if (!title) return;
    if (loadingUpdateDocument) return;

    updateDocument({
      variables: {
        documentId: documentId ?? "",
        name: title
      },
      onCompleted: () => {
        handleRefetch()
        toast.success("Cập nhật tên thành công")
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  }

  const scrollToBottom = (height: number) => {
    setTimeout(() => {
      if (documentRef.current) {
        documentRef.current.scrollTop = height;
        documentRef.current.style.scrollBehavior = 'smooth';
      }
    }, 300);
  };

  const handleScroll = async () => {
    console.log("hahaha");


    if (newPageManagerRef.current && documentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = documentRef.current;

      if (scrollHeight - (scrollTop + clientHeight) < 10) {
        if (documentLoadingRef.current) return;

        setPage(prev => {
          (async () => {
            const fetchMoreData = await fetchMore({
              variables: {
                documentId: data?.collaborationSession.activeDocumentId,
                pageIndex: prev + 2
              }
            })

            console.log("fetchMoreData", fetchMoreData);


            if (fetchMoreData.data.eventDocumentClientRequestSync.delta === null) {
              documentRef.current?.removeEventListener('scroll', handleScroll);
            }
          })()

          return prev + 1
        }
        )
      }
    }
  };

  useEffect(() => {
    if (documentRef.current) {
      documentRef.current.addEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setTitle(data?.collaborationSession?.activeDocument?.name)
  }, [data])

  useEffect(() => {
    if (!newPageManagerRef.current) return;
    if (!pageElement) return;

    if (documentLoading) {
      return;
    }

    if (documentData && page === 0) {
      newPageManagerRef.current.setDelta(JSON.parse(documentData?.eventDocumentClientRequestSync?.delta as string), page, 'silent')
      newPageManagerRef.current.attachToolbarToPage(0);
    } else {
      newPageManagerRef.current?.loadNextWithData(JSON.parse(documentData?.eventDocumentClientRequestSync?.delta as string))
      newPageManagerRef.current.attachToolbarToPage(page);
    }

  }, [documentData]);

  useEffect(() => {
    useGetCollaborationSessionUpdated(sessionId, collaborationId, handleNewFileSubscription)
  }, []);

  (() => {
    deltaQueue.emit();
  })()

  return (
    <div className='flex w-full h-full'>
      {/* editor */}
      <div className='relative flex flex-col w-full h-screen max-h-screen'>
        {/* tool bar */}
        <div id='toolbar' className='z-10 flex flex-col'>
          <div className='flex items-center gap-2 bg-white p-2 w-full'>
            {/* logo */}
            <Avatar className='mr-2 w-10 h-10'>
              <AvatarImage src='https://objects.epess.org/epess-public/main_icon.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* title */}
            <div className='flex flex-col'>
              {/* File name input */}
              <div className='flex items-center justify-center mt-1 gap-5'>
                <Input onBlur={handleChangeName} type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Untitled' />
                <div className='bg-green-500 rounded-[50%] w-5 h-5'>
                </div>
              </div>
              {/* Menu bar */}
              <div className='flex items-center gap-3'>
                <DropdownMenuCheckboxes
                  isOpenAfterClick={false}
                  buttonLabel={
                    <Button variant='ghost' className='px-0 h-6'>
                      File
                    </Button>
                  }
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
            <span className="ql-formats">
              <select className="ql-color"></select>
              <select className="ql-background"></select>
            </span>
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
                    <MoreHorizontalIcon className='w-4 h-4' />
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
        {
          loading || loadingNewFile ?
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <ScaleLoader />
            </div>
            :
            data?.collaborationSession.activeDocumentId &&
            <ScrollArea ref={documentRef} key={documentId} className='z-0 flex justify-center pb-10 overflow-y-auto bg-gray-50 px-20 pt-4 h-screen rounded-lg w-full '>
              <div
                className='w-full'
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'top left',
                }}
              >
                <div
                  ref={pageElement}
                  id='page-0'
                  className='bg-white w-full drop-shadow-lg'
                  style={{
                    // width: `${PAGE_SIZES[pageConfig.pageSize].width}mm`,
                    height: `${PAGE_SIZES[pageConfig.pageSize].height}mm`,
                    marginTop: `${pageConfig.margin}px`,
                    marginBottom: `${pageConfig.margin}px`,
                  }}
                >{' '}
                </div>
                {/* quill editor */}
              </div>
            </ScrollArea>
        }
      </div>
    </div>
  );
}

