import React from 'react'
import logo from '../assets/images/logo.webp'

const navList= ['Home', 'Products', 'Services', ]
export default function NavBar() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='menu-links'>
        <ul>
          
        </ul>
      </div>
    </header>
  )
}
