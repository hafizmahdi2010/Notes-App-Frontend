import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // errors

  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const submitForm = () => {
    if(title === ""){
      setTitleError("Title Is Required !");
    }
    else if(content === ""){
      setContentError("Content Is Required !");
      setTitleError("");
    }
    else{
      setTitleError("");
      setContentError("");
      console.log("OK")
    }
  }


  return (
    <>
      <Navbar isMenu={false}/>
      <div className="editNoteContainer">
         <div className="editNoteForm">
          <h3 className='mb-3'>Edit Note : "Web Development"</h3>
          <label htmlFor="title">Title</label>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name='title' id='title' placeholder='Enter New Title'/>
          <p className="error">{titleError}</p>
          <label htmlFor="content">Content</label>
          <textarea  onChange={(e)=>setContent(e.target.value)} value={content} name="content" id="content" placeholder='Enter New Content'></textarea>
          <p className="error">{contentError}</p>
          <button className="btn btn-dark my-3" onClick={submitForm}>Update Note</button>
         </div>
      </div>
    </>
  )
}

export default EditNote