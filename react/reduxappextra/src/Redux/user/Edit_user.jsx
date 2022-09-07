import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { updateuser } from '../action'

function Edit_user() {
  const userdata = useSelector((state)=>{
    return state.user.items;
})

    const [edited,SetEdited] = useState({
      name:"",
      email:"",
      mobile:"",
      password:""
    })

    useEffect(()=>{
        
    })
    

    function changehandle (e){
      const {name,value}=e.target;
      SetEdited({...edited,[name]:value})
      
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function submithandle(e){
    e.preventDefault();
    dispatch(updateuser(edited))
    navigate('/')

}

  return (
    <form action="">
    <h2>edit user form</h2>
<div class="form-group mb-3 mt-3">
  <label for="name">Name:</label>
  <input type="text" class="form-control" placeholder="Enter your name" id="name" name="name" value={userdata.name} onChange={changehandle}/>
</div>
<div class="form-group mb-3 mt-3">
  <label for="email">Email address:</label>
  <input type="email" class="form-control" placeholder="Enter email" id="email" name="email" value={edited.email} onChange={changehandle}/>
</div>
<div class="form-group mb-3 mt-3">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" placeholder="Enter password" id="pwd" name="password" value={edited.password} onChange={changehandle}/>
</div>
<div class="form-group mb-3 mt-3">
  <label for="mobile">Mobile Number:</label>
  <input type="number" class="form-control" placeholder="Enter mobile number" id="number" name="mobile" value={edited.mobile} onChange={changehandle}/>
</div>

<button type="submit" class="btn btn-primary" onClick={submithandle}>Submit</button>
</form>
    
  )
}

export default Edit_user