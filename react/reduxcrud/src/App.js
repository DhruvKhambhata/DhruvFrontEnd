import React from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'
import Viewuser from './Pages/Viewuser'
function App() {
  return (
    <div>

      <Routes>
        
        <Route path="/" element={<Viewuser/>}/>
        <Route path="/add_user" element={<Adduser/>}/>
        <Route path="/edit_user/:id" element={<Edituser/>}/>
     </Routes>
         </div>
  )
}

export default App