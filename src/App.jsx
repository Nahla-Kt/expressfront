import { useState } from 'react'
import './App.css'
 import Adduser from './components/Adduser.jsx'
 import Login from './components/Login.jsx'
import Addproduct from './components/Addproduct.jsx'
import Getdata from './components/Getdata.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'




function App() {
 

  return (
    <>
    <BrowserRouter>
       <Routes>
      <Route path="/" element={<Adduser />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Addproduct" element={<Addproduct />} />
<Route path="/getdata" element={<Getdata />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
