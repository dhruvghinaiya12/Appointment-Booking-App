import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Appointments from '../pages/Appointments'
import Contact from '../pages/Contact'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/appointments" element={<Appointments/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>
    
    </div>
  )
}

export default AllRoutes
