import React from 'react'
import { NavLink } from 'react-router-dom'

function Adminsidebar() {
  return (
   <>
 <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <NavLink>
        <div class="sidebar-brand-icon rotate-n-15">
         
        </div>
        <div class="sidebar-brand-text mx-3 ">Beauty in You </div>
    </NavLink>

    <hr class="sidebar-divider my-0"/>

    <li class="nav-item">
        <NavLink class="nav-link" to="/admin">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></NavLink>
    </li>

    <hr class="sidebar-divider"/>
  
    <li class="nav-item">
        <NavLink class="nav-link" to="/admin/enquiry">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Enquiry</span></NavLink>
    </li>
   

    <li class="nav-item">
        <NavLink class="nav-link" to="/admin/service">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Service</span></NavLink>
    </li>
    <li class="nav-item">
        <NavLink class="nav-link" to="/admin/package">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Packages</span></NavLink>
    </li>

    <li class="nav-item">
        <NavLink class="nav-link" to="/admin/gallery">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Gallery</span></NavLink>
    </li>
    <li class="nav-item">
        <NavLink class="nav-link" to="/admin/review">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Review</span></NavLink>
    </li>
    <li class="nav-item">
        <NavLink class="nav-link" to="/admin/other">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Others</span></NavLink>
    </li>
   
    <hr class="sidebar-divider"/>
    <li class="nav-item">
        <NavLink class="nav-link" to="/logout" >
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Logout</span></NavLink>
    </li>


    

</ul> 
   </>
  )
}

export default Adminsidebar