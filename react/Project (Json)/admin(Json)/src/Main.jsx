import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './component/Header'
import Footer from './component/Footer'
import Private_Route from './component/Private_Route'
import Dashboard from './pages/Dashboard'
import Add_Product from './pages/Add_Product'
import View_Product from './pages/View_Product'
import Index from './pages/Index'
import View_contact from './pages/View_contact'
import View_users from './pages/View_users'
import View_cart from './pages/View_cart';
import PNF from './pages/PNF'
import Edit_contact from './pages/Edit_contact'
import Edit_Product from './pages/Edit_Product'
import Edit_users from './pages/Edit_users'
import Add_admin from './pages/Add_admin'

function Main() {
  return (
    <div>
       
        <Routes>
            <Route index element={<><Index/></>}/>
            <Route path='/index' element={<><Index/></>} />
            <Route path='/dashboard' element={<Private_Route><Header/><Dashboard/></Private_Route>}/>
            <Route path='/add_Product' element={<Private_Route> <Header/><Add_Product/></Private_Route>}/>
            <Route path='/view_product' element={<Private_Route> <Header/><View_Product/></Private_Route>}/>
            <Route path='/view_contact' element={<Private_Route> <Header/><View_contact/></Private_Route>}/>
            <Route path='view_cart' element={<Private_Route><Header/><View_cart/></Private_Route>} />
            <Route path='/View_users' element={<Private_Route> <Header/><View_users/></Private_Route>}/>
            <Route path='/pnf' element={<><Header/><PNF/></>}/>
            <Route path='/view_contact/:id' element={<Private_Route> <Header/><Edit_contact/></Private_Route>}/>
            <Route path='/add_admin' element={<Add_admin/>} />
            <Route path='/view_product/:id' element={<Edit_Product/>}/>
            <Route path='/View_users/:id' element={<Edit_users/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Main