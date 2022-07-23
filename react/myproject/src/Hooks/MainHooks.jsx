import React,{useEffect, useState} from 'react'
import ImgCom from './ImgCom'


function MainHooks() {

    const[isshowing,setIMG]=useState(false);

    useEffect(()=>{
      console.log('component mounted UseEffect');
})
  return (
    <div className='container'>
      <button onClick={()=> setIMG(!isshowing)}>Hide</button>
      {
        isshowing ? <ImgCom/> : null
      }
    </div>
  )
}

export default MainHooks