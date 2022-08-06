import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login/login'
import Sheet from './sheet/sheet'
import WrongPath from './WrongPath/wrongPath'
import Home from './home/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='sheet' element={<Sheet />} />
        <Route path='*' element={<WrongPath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
