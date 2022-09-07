export const adduser=(data)=>{
    return{
        type:'ADD_USER',
        payload:data
    }
}

export const deleteuser=(id)=>{
    return{
        type:'DELETE_USER',
        payload:id
    }
}

export const updateuser=(user)=>{
    return{
        type:'UPDATE_USER',
        payload:user
    }
}