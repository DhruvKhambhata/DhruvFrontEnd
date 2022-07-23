
import React, { Component } from 'react'
import Cycle from './Cycle'

export class MainLife extends Component {
  constructor(){
      super();
    this.state={
        status:true
    }
    }

  render() {
    return (
      <div className='container'>
          <br></br>
          <hr />
          {
              this.state.status ? <Cycle/> : null
          }
          <button className="btn bg-danger text-light float-right mt-5" onClick={() => this.setState({status:false})}>end </button>
          <br></br>
          <hr></hr>
          
      </div>
    )
  }
}

export default MainLife