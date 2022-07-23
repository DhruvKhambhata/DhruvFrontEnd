import React, { Component } from 'react'

export class Cycle extends Component {
  
    constructor(){
        super();
        this.state={
            name:"dhruv",
            age:"23"
        }
    }

    componentDidMount(){
        console.log("birth")
    }

    componentDidUpdate(){
        console.log("updated")
    }

    componentWillUnmount(){
        console.log("end")
    }

    onChange(){
        this.setState({name:"shiv",age:"22"})
    }
  
    render() {
    return (
      <div className='container'>
        <h1>
            hello {this.state.name} my age is {this.state.age}
        </h1>
        <hr></hr>
        <button className="btn bg-danger text-light" onClick={() => this.onChange()}>update the status</button>
      </div>
    )
  }
}

export default Cycle