import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from './assets/bars-solid.svg'
import CloseIcon from './assets/window-close-regular.svg'
<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css" rel="stylesheet" />



const Navbar = () => {

    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)
    const showSideMenu = ()=>{
        (isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true))
    }

    return ( 
        <nav className="fixed w-full h-8 bg-blue-400 text-gray-200 flex flex-row justify-between">
            <div className=" brand-logo text-sm font-bold">
                <h1>KU Dorm-Mate</h1> 
            </div>
            <div className=" lg:hidden  menu-list flex flex-row  text-xs font-bold">
                <Link className="menu-list-item px-2" to="/">home</Link>
                <Link className=" menu-list-item px-2" to="/">Profile</Link>
                <Link className="menu-list-item px-2" to="/create" style={{
                    color:"white",
                    backgroundColor:'#f1356c',
                    borderRadius: '7px'
                }}
                >new blog</Link>       
            </div>

            <button onClick={()=> {showSideMenu()}} className="menu-button">
                {(isSideMenuOpen) ? <img src={CloseIcon} className="w-8 h-8 px-2" alt="close"></img> :  <img src={MenuIcon} className="w-8 h-8 px-2" alt="menubar"></img>}
            </button>
            {(isSideMenuOpen) ?  SideMenu() : ''}
           
        </nav>
     );
}
export default Navbar;

function SideMenu(){
    return(
        <div className=" fixed h-screen w-1/2 sm:w-1/4  bg-pink-500 top-8">
            <div className="menu-list flex flex-col text-xs font-bold">
                <Link className="menu-list-item py-2" bg-white text-blue-700 to="/">home</Link>
                <Link className="menu-list-item  py-2" bg-white text-blue-700 to="/">Profile</Link>
                <Link className="menu-list-item py-2" bg-white text-blue-700  to="/create" style={{
                    color:"white",
                    backgroundColor:'#f1356c',
                    borderRadius: '7px'
                }}
                >new blog</Link>       
            </div>
        </div>
    )
}