import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { createEditor, Editor, Transforms, Text } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export default function Eye() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const editableRef = useRef(null);

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'paragraph':
        return <p {...props.attributes}>{props.children}</p>;
      case 'heading':
        return <h2 {...props.attributes}>{props.children}</h2>;
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <span {...props.attributes}>{props.children}</span>;
  }, []);

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'put text here' }],
    },
    {
      type: 'heading',
      children: [{ text: 'Heading text here'}]
    }
  ]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Handle mutations here, if needed
    });
    
    const element = editableRef.current;
    if (element) {
      observer.observe(element, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
      <Editable
        ref={editableRef}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case '`': {
              event.preventDefault();
              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
              });
              Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                { match: n => Editor.isBlock(editor, n) }
              );
              break;
            }
            case 'b': {
              event.preventDefault();
              Editor.toggleMark(editor, 'bold');
              break;
            }
            case 'i': {
              event.preventDefault();
              Editor.toggleMark(editor, 'italic');
              break;
            }
            case 'u': {
              event.preventDefault();
              Editor.toggleMark(editor, 'underline');
              break;
            }
          }
        }}
      />
    </Slate>
  );
}
