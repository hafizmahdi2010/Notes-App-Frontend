import React, { useState } from 'react'

const NewNoteBtn = (props) => {
  const [isImportant, setIsImportant] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // errors

  const [titleError, setTitleError] = useState("")
  const [contentError, setContentError] = useState("")

  function submitNote(){
    if(title === ""){
      setTitleError("Title Is Required !")
    }
    else if(content === ""){
      setTitleError("")
      setContentError("Content Is Required !")
    }
    else{
      alert("Success")
      setContentError("");
      setTitleError("")
    }
  }

  // console.log("IMP : ",isImportant)
  return (
    <>
      <div className="newNoteBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{background:props.color === "dark" ? "#111010" : ""}}>
        <i className="ri-add-line"></i>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{title !== "" ? "Note : " + title : "Create New Note"}</h5>
              <i className="ri-close-large-line" style={{ cursor: "pointer", fontSize: 20 }} data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div className="modal-body">
              <div className="inputs">
                <label htmlFor="noteTitle">Enter A Note Title</label>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name='noteTitle' id='noteTitle' placeholder='Enter A Note Title' />
                <span className="error">{titleError}</span>

                <label htmlFor="noteContent">Enter A Note Content</label>
                <textarea onChange={(e)=>setContent(e.target.value)} value={content} name="noteContent" id="noteContent" placeholder='Enter A Note Content Here...'></textarea>
                <span className="error">{contentError}</span>
                
                <div className='flex al-center mt-3' style={{display:"flex",alignItems:"center",gap:10}}>
                  <p>Is Important</p>
                  <input type="checkbox" onClick={(e)=>{setIsImportant(!isImportant)}}/>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" onClick={submitNote}>Add New Note</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewNoteBtn