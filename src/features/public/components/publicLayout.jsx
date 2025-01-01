import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'

const PublicLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        <Toaster/>
    </>
  )
}

export default PublicLayout