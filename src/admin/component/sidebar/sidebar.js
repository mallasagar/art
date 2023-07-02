import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiMessageAlt} from 'react-icons/bi'
import {AiFillSetting,AiOutlineDashboard}from 'react-icons/ai'
import{FiPackage} from 'react-icons/fi'
import{GrGallery} from 'react-icons/gr'
import {CiLogout} from 'react-icons/ci'
import{BsEmojiHeartEyes} from 'react-icons/bs'
import{MdOutlineDevicesOther} from 'react-icons/md'



function Adminsidebar() {
  return (
   <>
 <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion py-3" id="accordionSidebar">


    <div class="sidebar-brand-text mx-auto fs-4 text-warning ">Beauty in You </div>
    

    <hr class="sidebar-divider bg-light mb-2"/>

    <li class="nav-item my-2 ">
        <NavLink class="nav-link" to="/admin">
            <AiOutlineDashboard className='mx-2' size={'18px'}></AiOutlineDashboard>
            <span>Dashboard</span></NavLink>
    </li>

  
    <li class="nav-item  my-2 ">
        <NavLink class="nav-link" to="/admin/enquiry">
       <BiMessageAlt className='mx-2' size={'18px'}></BiMessageAlt>
            <span>Enquiry</span></NavLink>
    </li>
   

    <li class="nav-item  my-2 ">
        <NavLink class="nav-link" to="/admin/service">
            <AiFillSetting className='mx-2' size={'18px'}></AiFillSetting>
            <span>Service</span></NavLink>
    </li>
    <li class="nav-item  my-2 ">
        <NavLink class="nav-link" to="/admin/package">
            <FiPackage className='mx-2' size={'18px'}></FiPackage>
            <span>Packages</span></NavLink>
    </li>

    <li class="nav-item  my-2 ">
        <NavLink class="nav-link" to="/admin/gallery">
        <GrGallery  className='mx-2' size={'18px'}></GrGallery>
            <span>Gallery</span></NavLink>
    </li>
    <li class="nav-item  my-2 ">
        <NavLink class="nav-link" to="/admin/review">
            <BsEmojiHeartEyes className='mx-2' size={'18px'}></BsEmojiHeartEyes>
            <span >Review</span></NavLink>
    </li>
    <li class="nav-item  my-2 ">
        <NavLink class="nav-link" to="/admin/other">
            <MdOutlineDevicesOther className='mx-2' size={'18px'}></MdOutlineDevicesOther>
            <span>Others</span></NavLink>
    </li>
   
    <hr class="sidebar-divider bg-light"/>
    <li class="nav-item ">
        <NavLink class="nav-link" to="/logout" >
            <CiLogout className='mx-2' size={'18px'}></CiLogout>
            <span>Logout</span></NavLink>
    </li>


    

</ul> 
   </>
  )
}

export default Adminsidebar