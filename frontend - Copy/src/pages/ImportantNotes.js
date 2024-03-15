import React from 'react'
import Navbar from "../components/Navbar"

const ImportantNotes = () => {
  return (
    <>
      <Navbar isMenu={false}/>
      <div className="impNotes">
        <h1 className='text-3xl'>Your <span className='text-gradiant'>Important Notes</span></h1>
        <div className="gridContainer">
        <div className="note">
         <div className="flex al-center js-between">
           <p className='noteCount'>Note 1</p>
           <i className="ri-star-fill text-xl"></i>
         </div><h1 className='heading'>Coding</h1>
           <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis in dolore corrupti tempore architecto ratione veniam nobis aliquid cupiditate.</p>
           
           <p className="noteDate">2/4/23</p>

           <div className="noteBtns">
           <i className="ri-delete-bin-7-fill"></i>
           <i className="ri-edit-2-fill"></i>
           </div>

         </div>
         
        </div>
      </div>
    </>
  )
}

export default ImportantNotes