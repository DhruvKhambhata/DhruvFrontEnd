import React,{useState} from 'react';
import shortid from 'shortid';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addUser,getUser } from '../Redux/actions'
function Adduser() {

  let dispatch=useDispatch();


  const [formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    username:"",
    email:"",
    phone:"",
    website:""
})

const [error,setError]=useState("");

function changehandel(e){
    setFormvalue({...formvalue,[e.target.name]:e.target.value})
}


const navigate=useNavigate();
function submithandel(e){
   e.preventDefault();
   if(!formvalue.name || !formvalue.username || !formvalue.email || !formvalue.phone || !formvalue.website)
   {
      setError("All field is required");
   }
   else{
    dispatch(addUser(formvalue))
    dispatch(getUser());
    navigate('/');
   }
    
}
  return (
      <div className="container mt-3">
          <h2>Add user form</h2>
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

  )
}

export default Adduser