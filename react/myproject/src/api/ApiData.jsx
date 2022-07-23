import React from 'react'


export class ApiData extends React.Component {
  
    constructor()
    {   
      super();
        fetch('https://reactdemo-6148e-default-rtdb.firebaseio.com/users.json')
        .then(response => response.json())
        .then(json => document.write({json}))
        .catch(err => document.write(err));
        
    }
    
    render() {
    return (
      <div>
        ApiData
          
      </div>
    )
  }
}

export default ApiData



