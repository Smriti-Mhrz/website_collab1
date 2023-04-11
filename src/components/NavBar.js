import React from 'react'
import logo from '../assets/images/logo.webp'

const navList= ['Home', 'Products', 'Services', 'Portfolio','Team','Blog','Contact']
export default function NavBar() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='menu-links'>
        <ul>
          {navList.map(Item)=>{
            return '<li><NavLink></NavLink></li>' 
          }}
        </ul>
      </div>
    </header>
  )
}
