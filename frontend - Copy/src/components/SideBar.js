import functions from "../functions/functions"
import { Link } from 'react-router-dom';


const SideBar = () => {
  const { toggleClass, toggleLayout , clickable,removeClass} = functions();

  return (
    <>
      <div className="sideBar">
        <div className="flex al-center mb-4">
          <Link to="/profile"><div className="prifileCircle"></div></Link>
          <div className="sidebarHead">
          <div className="block">
            <h3>Mo Mahdi</h3>
            <p>Free</p>
          </div>
          <i className="ri-close-line closeMenu" onClick={()=>removeClass(".sideBar","active")}></i>
          </div>
        </div>

        <Link to="/importantNotes" style={{textDecoration:"none",color:"#fff"}}><button className="btn_black"><i className="ri-star-fill"></i> Important Notes</button></Link>
        <button className="btn_black" onClick={()=>clickable(".newNoteBtn")}><i className="ri-sticky-note-add-line"></i> New Note</button>

        <div className="updateToPro">
          <h3>Update To Pro</h3>
          <p>Lorem ipsum sapiente, natus tempora nam. Hic dolorem veniam voluptatem?</p>
          <button className="btn_dark">Update To Pro</button>
        </div>

        <button className="btn_black mt-4"><i className="ri-logout-box-r-line"></i> Logout</button>
        <button className="btn_black" onClick={() => toggleClass(".settingDropDown", "active")}><i className="ri-settings-3-fill"></i> Settings</button>

        <div className="settingDropDown">
          <button className="btn_black" onClick={() => {
            toggleLayout("row"); 
            window.location.reload()
          }
          }>Change Layout</button>
          <button className="btn_black">Costamize Theme</button>
        </div>

      </div>
    </>
  )
}

export default SideBar