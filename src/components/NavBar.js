import React, { useState } from 'react'
import '../assets/style/NavBar.scss'
import { NavLink, Outlet } from 'react-router-dom';
import logo from "../assets/images/logo.webp"
import {FaBars, FaTimes} from 'react-icons/fa'

export default function NavBar() {
  const navList=['Home', 'Products', 'Services', 'Portfolio', 'Team', 'Blog', 'Contact'];
  const [click, setClick] = useState(false);
  const handleClick=()=>{
    setClick(!click);
  }
  return (
    <div className='navbar_main'>
      <div className='logo_img'>
        <img src={logo} alt='logo'/>
      </div>
       
        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20}/>):(<FaBars size={20}/> )}
        </div>
        <ul className={click?"nav-menubar active":"nav-menu"}>
          {
            navList.map((item)=>{
              return(
                <li>
                  <NavLink>
                    {item}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <Outlet/>
      </div>
  )
}
