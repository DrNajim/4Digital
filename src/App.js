import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Studentslist from './Components/Studentslist';
import Newstudents from './Components/Newstudents';

function Addremv () {
  
  return (
    <div className='APP'>
<BrowserRouter>
        <Routes>
          <Route path='/' element={<Studentslist/>} />
          <Route path='/AddStudent' element={<Newstudents/>} />
        </Routes>
      </BrowserRouter>
    </div>
    )
}
export default Addremv
