import React from 'react'
import "./navbar.css"
import {Mymob, Mynav} from './navigation'
import {SlMenu} from 'react-icons/sl'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'



function Mynavbar() {
  let[open, setopen]=useState(false)

  const hamburgericon=
  <div className='hamburger-container  d-flex justify-content-between align-items-center  opacity-75 sticky-top position-sticky '>
   <div className='hamburger-brandname col-4 d-sm-none d-md-none d-block  text-center'>Beauty in you</div>

    <SlMenu size={'20px'}  className='hamburger col-2 d-sm-none d-md-none d-block 
     justify-content-end align-items-center text-dark bg-transparent       '
  onClick={()=>{setopen(!open)}}></SlMenu>
  </div>


  const closeicon=<GrClose size={'22px'}   className=' d-sm-none d-md-none my-1 py-1  d-flex  col-12   '
  onClick={()=>{setopen(!open)}}></GrClose>

  const closemobilemenu=()=>setopen(false);
  return (
    <>
     <Mynav/>
     {/* <SlMenu style={{height:"22px", width:"22px"}}></SlMenu>
     <GrClose style={{height:"22px", width:"22px"}}></GrClose> */}
     {/* <Mymob></Mymob> */}

     {open ? closeicon : hamburgericon}
        {open && <Mymob ismobile={true} closemobilemenu={closemobilemenu}/>}
 
  
    </>
    

        
 )
}

export default Mynavbar