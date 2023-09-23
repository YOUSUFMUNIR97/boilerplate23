import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../Screens/Dashboard'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
import Protected from '../Screens/Protected'
import Tasks from '../Screens/Tasks'


const Approuter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Protected Screen={Tasks} />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>

      </Router>

    </>

  )
}

export default Approuter
