'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css';
import 'quill-table-better/dist/quill-table-better.css';
import { clientWS as createClientWS, createApolloClient } from '@/providers/apolloClient'
import { useAuth, useUser } from '@clerk/nextjs';
import DeltaQueue from './EditorClass/DeltaQueue';
import { GLOBAL_MARGIN, PageConfiguration } from './EditorClass';
import PageManager, { PAGE_SIZES } from './EditorClass/PageManagerClass';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useGetEventDocumentClientRequestSync } from '@/app/api/document/eventDocumentClientRequestSync';
import { ScrollArea } from '@/components/ui/scroll-area';
import ToolbarHeader from '@/components/customs/toolbar-header';
import { useGetDocument } from '@/app/api/document';
import { useMe } from '@/hooks/use-me';



export const EDITOR_TOOLBAR_BINDINGS = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['image', 'video'],
];

type TEditor = {
  documentId: string,
  handleFileEvent: (event: string) => void
}

export default function Editor({ documentId, handleFileEvent }: TEditor) {

  const [page, setPage] = useState(0)

  const { data: documentData, loading: documentLoading, fetchMore } = useGetEventDocumentClientRequestSync(documentId, page)

  const [renderOneTime, setRenderOneTime] = useState(false)
  const [saveLoading, setSaveLoading] = useState(false)


  useEffect(() => {
    if (documentData) {
      setRenderOneTime(true)
    }
  }, [documentData])


  const documentRef = useRef<HTMLDivElement | null>(null)
  const pageElement = useRef<HTMLDivElement | null>(null)
  const documentLoadingRef = useRef<boolean>(documentLoading)

  const { userId, sessionId } = useAuth();
  const { user } = useMe()

  const clientHTTP = useMemo(() => createApolloClient(sessionId!), [sessionId]);
  const clientWS = useMemo(() => createClientWS(sessionId!), [sessionId]);

  const { loading, data } = useGetDocument(documentId)

  const isReadOnly = data?.document?.collaborators?.filter((collaborator) => collaborator.user.id === userId)[0]?.writable ? false : true

  const deltaQueue = new DeltaQueue(clientHTTP);
  const pageConfig = new PageConfiguration('A4', GLOBAL_MARGIN);

  const newPageManagerRef = useRef<PageManager | null>(null)


  const handleScroll = async () => {
    if (newPageManagerRef && documentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = documentRef.current;

      if (scrollHeight - (scrollTop + clientHeight) < 10) {
        if (documentLoadingRef.current) return;

        setPage(prev => {
          (async () => {
            const fetchMoreData = await fetchMore({
              variables: {
                documentId: documentId,
                pageIndex: prev + 2
              }
            })

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

  const handleIsSaveLoading = (value: boolean) => {
    setSaveLoading(value)
  }


  useEffect(() => {
    documentLoadingRef.current = documentLoading
  }, [documentLoading])

  useEffect(() => {
    // Kiểm tra pageElement đã có sẵn chưa
    if (!pageElement.current) return; // Nếu pageElement chưa có sẵn thì không khởi tạo

    // Kiểm tra nếu newPageManagerRef chưa được khởi tạo
    if (!loading && !newPageManagerRef.current) {
      newPageManagerRef.current = new PageManager(
        isReadOnly,
        sessionId ?? "",
        userId ?? "",
        user?.name ?? "",
        documentId ?? "",
        PageManager.newQuill(pageElement.current, isReadOnly),
        clientHTTP,
        clientWS,
        deltaQueue,
        handleIsSaveLoading
      );
    }
  }, [pageElement, sessionId, userId, documentId, clientHTTP, clientWS, deltaQueue, isReadOnly]);


  useEffect(() => {
    if (!documentData) return;
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

  }, [renderOneTime, documentData]);


  useEffect(() => {
    if (documentRef.current) {
      documentRef.current.addEventListener("scroll", handleScroll)
    }
  }, []);

  (() => {
    deltaQueue.emit();
  })()

  return (
    <div className='flex w-full h-full'>
      {/* editor */}
      <div className='relative flex flex-col w-full h-screen max-h-screen'>
        {/* tool bar */}
        <div className='flex flex-col'>
          <ToolbarHeader isSaveLoading={saveLoading} documentId={documentId} handleEvent={handleFileEvent} />
        </div>

        {/* maintain min height equal to page size * 1.5 */}
        {documentRef &&
          <ScrollArea ref={documentRef} key={documentId} className='z-0 flex justify-center pb-10 overflow-y-auto bg-gray-50 px-20 pt-4 h-screen rounded-lg w-full '>
            {renderOneTime &&
              <div
                className='w-full'
                style={{
                  transform: `scale(${1})`,
                  transformOrigin: 'top left',
                }}
              >
                <div className='w-fit m-auto'>
                  {
                    documentLoading &&
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                      <ScaleLoader />
                    </div>
                  }
                  <div
                    ref={pageElement}
                    id='page-0'
                    className='bg-white w-full drop-shadow-lg'
                    style={{
                      width: `${PAGE_SIZES[pageConfig.pageSize].width}mm`,
                      height: `${PAGE_SIZES[pageConfig.pageSize].height}mm`,
                      margin: `${pageConfig.margin}px auto`,
                    }}
                  >{' '}
                  </div>
                </div>
                {/* quill editor */}
              </div>
            }
          </ScrollArea>
        }
      </div>
    </div>
  );
}

