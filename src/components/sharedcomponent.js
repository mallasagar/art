import React from 'react'
import Mynavbar from './common/navbar/navbar.component'
import { Outlet } from 'react-router-dom'
import Myfooter from './common/footer.component'
import Myheader from './common/header.component'


function Mysharedcomponent() {
  return (
    <>
    <Myheader></Myheader>
    <Mynavbar></Mynavbar>
    <Outlet/>
    <Myfooter/>
        
    </>
  )
}

export default Mysharedcomponent