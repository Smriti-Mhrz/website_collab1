import React from 'react'
import { Footer, NavBar } from '../components'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'

export default function HomePage() {
  return (
    <>
        <NavBar/>
        <Home/>
        <Footer/>
    </>
  )
}
