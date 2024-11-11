import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import QuillTableBetter from 'quill-table-better';
import 'quill-table-better/dist/quill-table-better.css'

export const EDITOR_TOOLBAR_BINDINGS = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['image', 'video'],
  ['table-better']
];

export default function Editor() {
  const { quill, quillRef, Quill } = useQuill({
    theme: 'snow',
    bounds: 'editor',
    modules: {
      toolbar: {
        container: EDITOR_TOOLBAR_BINDINGS,
      },
      table: false, // disable table module
      'table-better': {
        language: 'en_US',
        menus: ['column', 'row', 'merge', 'table', 'cell', 'wrap', 'delete'],
        toolbarTable: true
      },
      keyboard: {
        bindings: QuillTableBetter.keyboardBindings
      }
    },
    placeholder: 'Write something...',


  });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  if (Quill && !quill) {
    Quill.register({
      'modules/table-better': QuillTableBetter
    }, true);
  }
  return (
    <div style={{ width: 1000, height: 300 }}>
      {/* quill editor */}
      <div ref={quillRef} />
    </div>
  );
}