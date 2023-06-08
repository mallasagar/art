import React from 'react'
import Mynavbar from './common/navbar/navbar.component'
import { Outlet } from 'react-router-dom'
import Myheader from './common/header.component'
import Myfooter from './common/footer.component'

function Mysharedcomponent() {
  return (
    <>
    <Myheader/>
    <Mynavbar></Mynavbar>
    <Outlet/>
    <Myfooter/>
        
    </>
  )
}

export default Mysharedcomponent