import React from 'react'


function List({title,desc,img}){
  return (
    <div className='col-md-4'>
        <div className="card">

           {/* <img src={download} className="card-img-top" alt="card image"/>*/}
            <img src={img} className="card-img-top" alt="card image"/>
            <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{desc}</p>
            <a href="#" className="btn btn-primary">More Info</a>
            </div>
        </div>
    </div>

  )
}

export default List