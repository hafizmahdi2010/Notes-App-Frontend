import React from 'react'
import functions from "../functions/functions"
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  const { addClass,removeClass,toggleClass } = functions();

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/" style={{textDecoration:"none",color:"#fff"}}><h1>NoteifyCloud</h1></Link>
        </div>

        <div className="serachArea">
          <input type="text" placeholder='Search Note'/>
          <i className="ri-close-fill" onClick={()=>removeClass(".serachArea","active")}></i>
        </div>
        <div className="icons">
        <i className="ri-search-line" onClick={()=>addClass(".serachArea","active")}></i>
        {
        props.isMenu === true ?
        <i className="ri-menu-3-line menuIcon" onClick={()=>toggleClass(".sideBar","active")}></i>
        : ""
        }
        </div>
      </div>
    </>
  )
}
// sideBar

export default Navbar