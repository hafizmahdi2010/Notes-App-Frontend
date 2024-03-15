import React from 'react'

const RowNotes = () => {
  return (
    <>
      <div className="rowContainer">
        <div className="note">
          <p className="noteCount">Note 1</p>
          <h1 className='heading'>Coding</h1>
          <p className='content'>Lorem ipsum dolor sit amet consectetur, adipiLorem ipsum dolor sit amet consectetur, adipiLorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae rem quo quaerat, consequatur minima laborum nisi, culpa veniam, corporis quis illum. Magni consequatur iure vitae ex eius harum assumenda soluta rerum libero. Fuga incidunt fugit velit quam praesentium, aspernatur sint recusandae voluptatum vero, quia magni quae doloremque eum impedit sed. Cum aliquid suscipit quas.</p>
          <div className="noteDate">2/3/23</div>
          
          <div className="noteBtns">
           <i className="ri-delete-bin-7-fill"></i>
           <i className="ri-edit-2-fill"></i>
           </div> 
        </div>
      </div>
    </>
  )
}

export default RowNotes