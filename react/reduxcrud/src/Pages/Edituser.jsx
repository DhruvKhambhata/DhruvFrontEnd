import React,{useEffect, useState} from 'react'

import {useNavigate, useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { edituser } from '../Redux/actions'
function Edituser() {
    const {user}= useSelector((state)=>state.usersR)
    
    const {id}=useParams();
    
    let dispatch = useDispatch();
    
    const [error,setError]=useState("");

  const [formvalue,setFormvalue]=useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    website:""
    })

    useEffect(()=>{
       console.log(user)
       
    })

function submithandel(){}
function changehandel(){}

  return (
    <div>
              <div className="container mt-3">
          <h2>Edit user form</h2>
          <form action="">
          
          {
            error && <h3 align="center">{error}</h3>
          }  
            
          <div className="mb-3 mt-3">
                  <label htmlFor="name">name:</label>
                  <input type="text" onChange={changehandel} value={formvalue.name} className="form-control" id="name" placeholder="Enter name" name="name" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">username:</label>
                  <input type="text" onChange={changehandel} value={formvalue.username} className="form-control" id="username" placeholder="Enter username" name="username" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">email:</label>
                  <input type="email" onChange={changehandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
           
              <div className="mb-3">
                  <label htmlFor="pwd">phone:</label>
                  <input type="number" onChange={changehandel} value={formvalue.phone} className="form-control" id="phone" placeholder="Enter phone" name="phone" />
              </div>
              <div className="mb-3">
                  <label htmlFor="pwd">website:</label>
                  <input type="text" onChange={changehandel} value={formvalue.website} className="form-control" id="website" placeholder="Enter website" name="website" />
              </div>
              <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Edituser