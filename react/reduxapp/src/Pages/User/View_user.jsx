import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {deleteuser} from '../actions'

function View_user() {

    const userdata=useSelector((state)=>{
        //console.log(state);
        return state.user.items;
    })

    const despatch=useDispatch();
  return (
      <div className="container mt-4">
          <h2>View User</h2>
         <Link to="/add_user" className='btn btn-primary float-end'>Add User</Link>
          <table className="table">
              <thead>
                  <tr>
                      <th>id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>mobile</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
        {
        userdata.map((items,index)=>{
           
            return(
                <tr key={index}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.mobile}</td>
                    <td>
                        <button onClick={()=>despatch(deleteuser(items.id))}>Delete</button>
                    </td>
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