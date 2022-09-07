import { createStore, combineReducers } from 'redux'
import userreducer from '../Redux/user/actions/UserReducer'




const mainReducer=combineReducers({
  user:userreducer
  
});

const allstate = {
  user:{
    items:[
      {
        id:1,name:"demo",email:"demo@gmail.com",password:"1234",mobile:"9875455541"
    },
    {
        id:2,name:"demo1",email:"demo1@gmail.com",password:"1234",mobile:"9875455541"
    },
    ]
  }
}

const store = createStore(mainReducer,allstate);

export default store;