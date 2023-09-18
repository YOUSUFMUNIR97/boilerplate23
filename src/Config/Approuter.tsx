import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../Screens/Dashboard'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'


const Approuter = () => {
  return (
      <>
      <Router>
        <Routes>
            <Route  path='dashboard/*' element={<Dashboard/>}/>
            <Route  path='Login' element={<Login/>}/>
            <Route  path='Signup' element={<Signup/>}/>
        </Routes>

      </Router>
      
      </>
    
    )
}

export default Approuter
