import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import React from 'react';
import './input.css';


function App() {

  return (
    <Routes>
      <Route path="/Login/" element={<Login />} />
    </Routes>

  )
}

export default App
