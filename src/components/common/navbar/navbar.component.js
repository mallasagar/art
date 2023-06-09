import React from 'react'
import "./navbar.css"
import {Mymob, Mynav} from './navigation'
import {SlMenu} from 'react-icons/sl'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'



function Mynavbar() {
  let[open, setopen]=useState(false)

  const hamburgericon=<SlMenu size={'22px'}  className='hamburger container col-12 d-flex  d-sm-none d-md-none ps-5        '
  onClick={()=>{setopen(!open)}}></SlMenu>


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