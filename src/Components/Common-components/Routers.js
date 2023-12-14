import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
const Routers = () => {
  return (
   
    <Routes>
    
        <Route index element={<Home />} />
        <Route path="our-services" element={<Services />} />
        
    
    </Routes>
  
  )
}

export default Routers