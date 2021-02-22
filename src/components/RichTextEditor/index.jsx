import React from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { convertToHTML } from 'draft-convert'
import DOMPurify from 'dompurify'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './styles.css'
const RichTextEditor = () => {
   const [editorState, setEditorState] = React.useState(() =>
      EditorState.createEmpty()
   )
   const [convertedContent, setConvertedContent] = React.useState(null)
   const handleEditorChange = state => {
      setEditorState(state)
      convertContentToHTML()
   }
   const convertContentToHTML = () => {
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent())
      setConvertedContent(currentContentAsHTML)
   }
   const createMarkup = html => {
      return {
         __html: DOMPurify.sanitize(html)
      }
   }
   return (
      <div className='App'>
         <header className='App-header'>Rich Text Editor</header>
         <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName='wrapper-class'
            editorClassName='editor-class'
            toolbarClassName='toolbar-class'
         />
         <div
            className='preview'
            dangerouslySetInnerHTML={createMarkup(convertedContent)}
         ></div>
      </div>
   )
}
export default RichTextEditor;
