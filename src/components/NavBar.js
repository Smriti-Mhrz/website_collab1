import React, { useState } from 'react'
import '../assets/style/NavBar.scss'
import { NavLink, Outlet } from 'react-router-dom';
import logo from "../assets/images/logo.webp"
import {FaBars, FaTimes} from 'react-icons/fa'
import Home from '../pages/Home';


export default function NavBar() {
  const navList=['Products', 'Services', 'Portfolio', 'Team', 'Blog', 'Contact'];
  const [click, setClick] = useState(false);
  const handleClick=()=>{
    setClick(!click);
  }
  return (
    <div className='navbar__main'>
      <div className='logo__img'>
        <img src={logo} alt='logo'/>
      </div>
       
        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20}/>):(<FaBars size={20}/> )}
        </div>
        <ul className={click?"nav__menubar active":"nav__menu"}>
        <li><NavLink to="/">Home </NavLink></li>
          {
            navList.map((item)=>{
              return(               
                
                <li>
                  <NavLink to={item}>
                    {item}
                  </NavLink>
                </li>
              
                )
              })
            }
            
        </ul>
        
    </div>

    
  )
}
