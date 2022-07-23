 import React, {useEffect} from 'react'
 function ImgCom() {
     useEffect(()=>{
         console.log('imgcomp component mounted');
         return ()=>{console.log('imgcomp component destroy')};
     },[]);
   return (
     <div>
         <img src="dont.png" alt="img1" />
   </div>
 )
 }

export default ImgCom