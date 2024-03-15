import React from 'react'
import Navbar from '../components/Navbar'

const SearchPage = () => {
  return (
    <>
    <Navbar isMenu={false}/>
      <div className="searchPage">
        <h1>Search Results For "Web Development"</h1>

        <div className="searchResult note">
          <h2>Web Development</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus molestias minima ex asperiores omnis, repudiandae pariatur quis perspiciatis, cupiditate iusto quos sequi neque ea iste laboriosam! Totam iusto magni distinctio repudiandae!</p>
          <p className="noteDate">2/3/23</p>
          <div className="noteBtns">
            <i className="ri-delete-bin-7-fill"></i>
            <i className="ri-edit-2-fill"></i>
          </div>
        </div>

      </div>
    </>
  )
}

export default SearchPage