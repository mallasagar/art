import React from 'react'
import {NavLink} from 'react-router-dom'
import './navigation.css'




function Mymob(props) {
  return (

    <div className='navbar container-fluid d-flex d-sm-none d-md-none rounded-1  opacity-75 sticky-top position-sticky text-light text-center'>
    <div className=' row col-12   justify-content-end '>
          <div className='col col-sm-3'></div>
          <div className='col-12' onClick={()=>props.ismobile && props.closemobilemenu()}><NavLink to='/'>Home</NavLink></div>
          <div className='col-12' onClick={()=>props.ismobile && props.closemobilemenu()}><NavLink to='/gallery'>Gallery</NavLink></div>
          <div className='co1-12'onClick={()=>props.ismobile && props.closemobilemenu()} > <NavLink to='/services'>Services</NavLink></div>
          <div className='co1-12'onClick={()=>props.ismobile && props.closemobilemenu()} > <NavLink to='/packages'>Packages</NavLink></div>
          <div className='col-12' onClick={()=>props.ismobile && props.closemobilemenu()}> <NavLink to='/about'>About</NavLink></div>
          <div className='col-12' onClick={()=>props.ismobile && props.closemobilemenu()}> <NavLink to='/contact'>Contact</NavLink></div>
    </div>
</div>
  )
}


function Mynav() {
  return (
 
    <>
    <div className='navbar container-fluid d-none d-sm-flex d-md-flex opacity-75  rounded-1 text-light text-center py-1'>
          <div className=' row col-12    justify-content-end align-items-center '>
                <div className='brandname col-none col-md-5 col-sm-none'><h1>Beauty in you</h1></div>
                <div className='col'><NavLink to='/'>Home</NavLink></div>
                <div className='col'><NavLink to='/gallery'>Gallery</NavLink></div>
                <div className='col'> <NavLink to='/services'>Services</NavLink></div>
                <div className='col'> <NavLink to='/packages'>Packages</NavLink></div>
                <div className='col'> <NavLink to='/about'>About us</NavLink></div>
                <div className='col'> <NavLink to='/contact'>Contact</NavLink></div>
          </div>
   </div>

       
  
  </>
    
  
  )
}

export  {Mynav, Mymob}