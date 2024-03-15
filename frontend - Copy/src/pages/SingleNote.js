import React from 'react'
import Navbar from '../components/Navbar'

const SingleNote = () => {
  return (
    <>
      <Navbar isMenu={false}/>
      <div className="singleNote">
        <h1>Web Development</h1>
        <p className="noteDate">2/3/23</p>

        <div className="singleNoteContent">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dolorum culpa, illo modi corporis quae eius sequi impedit, ea harum praesentium architecto consectetur commodi laudantium perferendis, accusamus ullam animi excepturi maxime veritatis at earum. Veniam ab nobis fugiat omnis excepturi itaque laudantium voluptatum doloribus maiores vel labore iste architecto, perspiciatis ex accusantium distinctio eos, aliquam consequuntur. Assumenda inventore dicta tempore, nesciunt fugit mollitia error saepe obcaecati nostrum! Deserunt officiis explicabo fuga? Ducimus commodi nostrum quibusdam molestias.</p>
        </div>

        <div className="noteBtns">
        <i className="ri-delete-bin-7-fill"></i>
        <i className="ri-edit-2-fill"></i>
        </div>
      </div>
    </>
  )
}

export default SingleNote