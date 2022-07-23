import React,{Component} from 'react'

export class LifeMain extends Component {
  constructor()
  {
      super();
      this.state={
          number:"1",
          name:"dhruv"
      }
  }
    render() {
    return (
      <div className='container'>
          <button onClick={()=> this.setstate({number:+this.state.number+1})}>+</button>
          <h1>{this.state.number}</h1>
          <button onClick={()=> this.setstate({number:this.state.number-1})}>-</button>
      </div>
    )
  }
}

export default LifeMain