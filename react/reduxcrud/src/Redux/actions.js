import * as types from './actionType'
import axios from 'axios'
import { useParams } from 'react-router-dom'



export const view=(data)=>{
    return{
        type:types.GET_USER, 
        payload:data
    }
}

export const getUser=()=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/users`)
        .then((resp)=>{
            dispatch(view(resp.data));
        })
        .catch(error=>console.log(error))
    }
}


export const destroy=(id)=>{
    return{
        type:types.DELETE_USER,
        payload:id
    }
}

export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:3000/user/${id}`)
        .then((resp)=>{
            dispatch(destroy());
            dispatch(getUser());
        })
        .catch(error=>console.log(error))
    }
}

export const store=()=>{
    return{
        type:types.ADD_USER,
    }
}

export const addUser=(data)=>{
    return function(dispatch){
        axios.post(`http://localhost:3000/users`,data)
        .then((resp)=>{
            dispatch(store());
        })
        .catch(error=>console.log(error))
    }
}



export const edituser=(id)=>{
    return{
        type:'EDIT_USER',
        payload:id
    }
}

export const editUser = (id) => {
    
    return function(dispatch){
        axios.get(`http://localhost:3000/users/${id}`)
        .then((resp)=>{
            dispatch(edituser());
            console.log(editUser)
        })
        .catch(error=>console.log(error))
    }
}

export const updateuser=(data)=>{
    return{
        type:'UPDATE_USER',
        payload:data
    }
}