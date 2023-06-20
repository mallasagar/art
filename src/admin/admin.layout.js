import React from 'react'
import {Outlet} from 'react-router-dom'
import './template/css/sb-admin-2.css'
import './template/css/sb-admin-2.min.css'
import Adminsidebar from './component/sidebar/sidebar';
import Adminheader from './component/header/header';
import Footer from './component/footer/footer';




function AdminLayout() {
  return (
   <>
    <div id="wrapper">

<Adminsidebar/>
 <div id="content-wrapper" class="d-flex flex-column">
     <div id="content">
         <Adminheader/>
         <div class="container-fluid">
         <Outlet></Outlet>
         </div>
     </div>
     <Footer/>
 

 </div>


</div>

   </>
  )
}

export default AdminLayout

