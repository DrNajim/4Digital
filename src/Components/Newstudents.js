import React from 'react'
import { useState} from 'react'
import {useDispatch } from 'react-redux'
import {add} from '../Redux/Reducer/Studentreducer'
import { Link } from 'react-router-dom'
function Newstudents(){
    const dispatch= useDispatch();
    const [newstudent, setnew] = useState({ firstname: "", lastname: "", Date_of_Birth:"", email:""});
  return (
    <div>      
    <label htmlFor="">Firstname</label>
    <input type='text'  placeholder='firstname...' onChange={(e) => setnew({...newstudent,firstname:e.target.value})}/>
    <label htmlFor="">Lastname</label>
    <input type='text'  placeholder='lastname...' onChange={(e) => setnew({...newstudent,lastname:e.target.value})}/>     
     <label htmlFor="">Date of Birth</label>
    <input type='number'  placeholder='Date of Birth...' onChange={(e) => setnew({...newstudent,Date_of_Birth:e.target.value})}/>
    <label htmlFor="">Email</label>
    <input type='email'  placeholder='email...' onChange={(e) => setnew({...newstudent,email:e.target.value})}/>
    <Link to='/'><button onClick={() =>dispatch(add(newstudent))}>add</button></Link>
    </div>
  )
}

export default Newstudents