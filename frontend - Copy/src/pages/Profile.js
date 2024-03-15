import React from 'react'
import NewNoteBtn from "../components/NewNoteBtn"
import functions from "../functions/functions"
import Navbar from '../components/Navbar'

const Profile = () => {
  const { clickable } = functions();

  return (
    <>
    <Navbar isMenu={false}/>
    <div className="profile mb-5">
      <div className="flex al-center">
        <div className="profilePic">
          <label htmlFor='profilePicFile' className="addPic"><i className="ri-image-add-line"></i></label>
        </div>
        <input type="file" name='profilePicFile' id='profilePicFile' hidden/>


        <div className="block">
          <h3>Mo Mahdi Farooqui</h3>
          <p>Join In : 2/3/23 &nbsp;&nbsp;<span className='version'>Free</span></p>
        </div>
      </div>

      <div className="flex al-center js-between yourNotesHead">
        <h3>Your Notes</h3>

        <div className="flex al-center gap-2">
          <button className="btn_dark" style={{minWidth:150}}  onClick={()=>clickable(".addPic")}>Add Profile Pic</button>
          <button className="btn_dark" onClick={()=>clickable(".newNoteBtn")}>Create Note</button>
        </div>
      </div>


     <div className="yourNotes">
     <div className="note">
           <p className='noteCount'>Note 1</p>
           <h1 className='heading'>Coding</h1>
           <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis in dolore corrupti tempore architecto ratione veniam nobis aliquid cupiditate.</p>
           
           <p className="noteDate">2/4/23</p>

           <div className="noteBtns">
           <i className="ri-delete-bin-7-fill"></i>
           <i className="ri-edit-2-fill"></i>
           </div>

      </div>

      <div className="note">
           <p className='noteCount'>Note 1</p>
           <h1 className='heading'>Coding</h1>
           <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis in dolore corrupti tempore architecto ratione veniam nobis aliquid cupiditate.</p>
           
           <p className="noteDate">2/4/23</p>

           <div className="noteBtns">
           <i className="ri-delete-bin-7-fill"></i>
           <i className="ri-edit-2-fill"></i>
           </div>

      </div>

      <div className="note">
           <p className='noteCount'>Note 1</p>
           <h1 className='heading'>Coding</h1>
           <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis in dolore corrupti tempore architecto ratione veniam nobis aliquid cupiditate.</p>
           
           <p className="noteDate">2/4/23</p>

           <div className="noteBtns">
           <i className="ri-delete-bin-7-fill"></i>
           <i className="ri-edit-2-fill"></i>
           </div>

      </div>

      <div className="note">
           <p className='noteCount'>Note 1</p>
           <h1 className='heading'>Coding</h1>
           <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis in dolore corrupti tempore architecto ratione veniam nobis aliquid cupiditate.</p>
           
           <p className="noteDate">2/4/23</p>

           <div className="noteBtns">
           <i className="ri-delete-bin-7-fill"></i>
           <i className="ri-edit-2-fill"></i>
           </div>

      </div>

      <div className="note">
           <p className='noteCount'>Note 1</p>
           <h1 className='heading'>Coding</h1>
           <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis in dolore corrupti tempore architecto ratione veniam nobis aliquid cupiditate.</p>
           
           <p className="noteDate">2/4/23</p>

           <div className="noteBtns">
           <i className="ri-delete-bin-7-fill"></i>
           <i className="ri-edit-2-fill"></i>
           </div>

      </div>

     </div>

     <NewNoteBtn color="dark"/>
    </div>
    </>
  )
}

export default Profile