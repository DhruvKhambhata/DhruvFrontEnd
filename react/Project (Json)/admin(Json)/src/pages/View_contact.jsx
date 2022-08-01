import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function View_contact() {

  const [allContact,SetAllContacts]=useState([]);
  useEffect(()=>{
    viewContacts()
  },[]);

  function viewContacts()
  {
    fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Contact.json`)
    .then((resp)=>resp.json())
    .then((data)=>SetAllContacts(data));
  }

  const navigate=useNavigate();
  

  function handelDelete(user_id){
    let ans=window.confirm("Are you sure want to delete !");
    if(ans)
    {
    fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Contact/${user_id}.json`, {
      method: 'DELETE',
    }).then((resp)=>resp.json())
    .then((data)=>viewContacts());
    }
  }

  return (
<div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View Contact</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              Contact Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>Contact Key</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Delete</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                     Object.keys(allContact).map((item,index)=>{
                      const {name,Email,Message}=allContact[item];  
                      return(
                        <tr key={index} className="odd gradeX">
                          <td>{index+1}</td>
                          <td>{name}</td>
                          <td>{Email}</td>
                          <td>{Message}</td>
                          <td className="center"><button onClick={()=>handelDelete(item)} className="btn btn-danger">Delete</button></td>
                          <td className="center"><button onClick={()=>navigate(`/view_contact/${item}`)} className="btn btn-primary">Edit</button></td>
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

export default View_contact