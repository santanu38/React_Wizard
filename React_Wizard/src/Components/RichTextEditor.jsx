import React,{useState} from 'react'
import {EditorContent,useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import {Button,Container,Typography} from '@mui/material'

const RichTextEditor=()=>{
    const [savedContent,setSavedContent]=useState(()=>{
        return localStorage.getItem("editorContent") || "";
    });

     const editor=useEditor({
        extensions:[StarterKit,Bold,Italic,Underline,BulletList,ListItem],
        content:savedContent,
        onUpdate:({editor})=>{
            const html=editor.getHTML();
            setSavedContent(html)
            localStorage.setItem("editorContent",html)
        }
     });

     const handleClear=()=>{
        editor.commands.clearContent()
        localStorage.removeItem("editorContent")
     }
     if(!editor){
        return null;
     }

     return(
        <Container maxWidth="md" style={{marginTop:20}}>
          <Typography variant='h5' gutterBottom> Rich Text Editor (TipTap)</Typography>
          <div style={{border:"1px solid #ccc" ,padding:"10px",borderRadius:"5px"}}>
            <Button onClick={()=>editor.chain().focus().toggleBold().run()} varient="contained" style={{marginRight:5}}>
                Bold
            </Button>
            <Button onClick={()=>editor.chain().focus().toggleItalic().run()} varient="contained" style={{marginRight:5}}>
                Italic 
            </Button>
            <Button onClick={()=>editor.chain().focus().toggleUnderline().run()} varient="contained" style={{marginRight:5}}>
                Underline
            </Button>
            <button onClick={()=>editor.chain().focus().toggleBulletList().run()} varient="contained" style={{marginRight:5}}>
                 Bullet List
            </button>
            
          </div>
          <EditorContent editor={editor} style={{ border: "1px solid #ddd", padding: "10px", minHeight: "200px", marginTop: 10 }}/>
          <Button onClick={handleClear} variant="contained" color="secondary" style={{ marginTop: 20 }}>
             Clear Content
          </Button>
        </Container>
     )
}
export default RichTextEditor