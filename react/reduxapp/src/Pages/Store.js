import { createStore, combineReducers } from 'redux'
import userReducer from './User/UserReducer';
import studentReducer from './User/StudentReducer';
import {composeWithDevTools} from 'redux-devtools-extension'


const mainReducer=combineReducers({
    user:userReducer,
    student:studentReducer
});

const allState={
    user:{
        items:[
            {
                id:1,name:"demo",email:"demo@gmail.com",password:"1234",mobile:"9875455541"
            },
            {
                id:2,name:"demo1",email:"demo1@gmail.com",password:"1234",mobile:"9875455541"
            },
        ]
    },
    student:{
        studentid:12,
        marks:"72"
    }
}


const store=createStore(mainReducer,allState,composeWithDevTools());

export default store;