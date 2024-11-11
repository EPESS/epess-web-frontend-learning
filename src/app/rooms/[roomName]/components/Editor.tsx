import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import QuillBetterTable from 'quill-better-table';

export default function Editor() {
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['image', 'video'],
          ['table'],
        ],
        handlers: {
          table: async () => {
            console.log('table');
            await makeTable(quill); 
          },
        },
      },
      table: false, // disable table module
      'better-table': {
        operationMenu: {
          items: {
            unmergeCells: {
              text: 'Another unmerge cells name',
            },
          },
        },
      },
      keyboard: {
        bindings: QuillBetterTable.keyboardBindings,
      },
    },
  });
  Quill?.register('modules/betterTable', QuillBetterTable);
  let tableModule = quill?.getModule('better-table') as any;
  // useEffect(() => {
  //   console.log(document.getElementsByClassName('ql-table')[0]);
  //   document
  //     .querySelector('.ql-formats .ql-table')
  //     ?.addEventListener('click', () => {
  //       tableModule?.insertTable(3, 3);
  //       console.log('hahaha');
  //     });
  // }, [document]);

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log(`delta: ${JSON.stringify(delta)}`);
        console.log(`oldDelta: ${JSON.stringify(oldDelta)}`);
        console.log(`source: ${source}`);
      });
    }
  }, [quill]);

  return (
    <div style={{ width: 1000, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
}
async function makeTable(quill: any) {
  let tableModule = quill?.getModule('better-table') as any;
  console.log(tableModule);
  await tableModule?.insertTable(3, 3);
}
