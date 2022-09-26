import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import React from 'react';
import './input.css';
import { Home } from './Pages/Home';


function App() {

  return (
    <Routes>
      <Route path="/Login/" element={<Login />} />
      <Route path="/Login/home" element={<Home />} />
    </Routes>

  )
}

export default App
