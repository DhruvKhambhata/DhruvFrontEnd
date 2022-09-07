import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { adduser } from '../action';
import shortid from 'shortid';

function Add_User() {


const dispatch=useDispatch();

const [formvalue,setformvalue]= useState({
    name:"",
    email:"",
    password:"",
    mobile:""

})
const Navigate = useNavigate();

function changehandle (e){
    const {name,value}=e.target;
    setformvalue({...formvalue,[name]:value})
    
}

function submithandle(e){
    e.preventDefault();
    Object.assign(formvalue,{id:shortid.generate()});
    dispatch(adduser(formvalue))
    Navigate('/')

}

  return (
    <form action="">
        <h2>Add user form</h2>
    <div class="form-group mb-3 mt-3">
      <label for="name">Name:</label>
      <input type="text" class="form-control" placeholder="Enter your name" id="name" name="name" value={formvalue.name} onChange={changehandle}/>
    </div>
    <div class="form-group mb-3 mt-3">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" placeholder="Enter email" id="email" name="email" value={formvalue.email} onChange={changehandle}/>
    </div>
    <div class="form-group mb-3 mt-3">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" placeholder="Enter password" id="pwd" name="password" value={formvalue.password} onChange={changehandle}/>
    </div>
    <div class="form-group mb-3 mt-3">
      <label for="mobile">Mobile NUmber:</label>
      <input type="number" class="form-control" placeholder="Enter mobile number" id="number" name="mobile" value={formvalue.mobile} onChange={changehandle}/>
    </div>
    
    <button type="submit" class="btn btn-primary" onClick={submithandle}>Submit</button>
  </form>
  )
}

export default Add_User