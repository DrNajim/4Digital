import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getList, remove} from '../Redux/Reducer/Studentreducer'
import { Link } from 'react-router-dom';
function Studentslist (){
    const dispatch= useDispatch();
 let  Students=useSelector(state=>state.ListTasks.tasks); 
 useEffect( ()=>  {dispatch(getList())} , []);
const [word, setsearch] = useState("");
  return (
    <div>
        <div>
    <input type="search"  placeholder='Search...' onChange={(e) => setsearch(e.target.value)}/>
    <Link to={"/AddStudent"}> Add New Student</Link>
    </div>
     <div>
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {Students.filter(item => word==="" ? item : item.firstname.toLocaleLowerCase().includes(word.toLocaleLowerCase()))
      .map(item => (
              <tr>
                <td>{item.firstname+' '+item.lastname}</td>
                <td>{item.Date_of_Birth}</td>
                <td>{item.email}</td>
                <td><button onClick={() => dispatch(remove(item.firstname))}>Delete Me</button></td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      </div>
  )
}

export default Studentslist