import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate} from 'react-router-dom'

function View_users() {

  const [allUsers,SetAllUsers]=useState([]);
  useEffect(()=>{
    viewUsers()
  },[]);

  function viewUsers()
  {
    fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register.json`)
    .then((resp)=>resp.json())
    .then((data)=>SetAllUsers(data));
  }

  const navigate=useNavigate();
  

  function handelDelete(user_id){
    let ans=window.confirm("Are you sure want to delete !");
    if(ans)
    {
    fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${user_id}.json`, {
      method: 'DELETE',
    }).then((resp)=>resp.json())
    .then((data)=>viewUsers());
    }
  }

  function handelstatus(user_id)
  {
   
    fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${user_id}.json`)
    
    .then((resp)=>resp.json())
    .then((data)=>{
     if(data.status === "Block")
     {
      fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${user_id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({status:"Unblock"}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        viewUsers();
      });
     }
     else{
      fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${user_id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({status:"Block"}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        viewUsers();
      });
     }
      
    });

   
  }

  return (
<div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View User</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              User Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>User Key</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>email</th>
                      <th>Status</th>
                      <th>Delete</th>
                      <th>Edit</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                   {
                     Object.keys(allUsers).map((item,index)=>{
                      const {name,mobile,email,status,}=allUsers[item];  
                      return(
                        <tr key={item} className="odd gradeX">
                          <td>{index+1}</td>
                          <td>{name}</td>
                          <td>{mobile}</td>
                          <td>{email}</td>
                          <td className="center"><button onClick={()=>handelstatus(item)} className="btn btn-primary">{status}</button></td>
                          <td className="center"><button onClick={()=>handelDelete(item)} className="btn btn-danger">Delete</button></td>
                          <td className="center"><button onClick={()=>navigate(`/View_users/${item}`)} className="btn btn-primary" data-toggle="modal" data-target="#myModal">Edit</button></td>
                        </tr>
                      )

                     })
                   } 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*End Advanced Tables */}
        </div>
      </div>
    </div>
  </div>



</div>
    
  )
}

export default View_users