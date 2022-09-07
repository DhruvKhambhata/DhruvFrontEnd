import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {deleteuser,updateuser} from '../action'


function View_user() {
    const userdata = useSelector((state)=>{
        return state.user.items;
    })
    const dispatch=useDispatch();
    const navigate = useNavigate();

    
  return (


      <div class="container">
    <h2>View users</h2>
    <Link to="/add_user" className='btn btn-primary float-end mb-3'>Add User</Link>  
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
          {
              userdata.map((items,index)=>{
                  return(
                  <tr>
                      <td>{index}</td>
                      <td>{items.name}</td>
                      <td>{items.email}</td>
                      <td>{items.mobile}</td>
                      <td><button onClick={()=>dispatch(deleteuser(items.id))} className="btn btn-danger">delete</button></td>
                      <td><button onClick={()=>navigate(`/edit_user/${items.id}`)} className="btn btn-primary">edit</button></td>
                  </tr>
                  )
              })
          }
        
      
      </tbody>
    </table>
  </div>
  )
}

export default View_user