import React from 'react'
import {NavLink} from 'react-router-dom'
import './navigation.css'




function Mymob() {
  return (

    <div className='navbar container d-sm-none d-md-none rounded-1 text-light text-center'>
    <div className=' row col-12 d-flex  justify-content-end '>
          <div className='col col-sm-3'></div>
          <div className='col-12'><NavLink to='/'>Home</NavLink></div>
          <div className='col-12'><NavLink to='/gallery'>Gallery</NavLink></div>
          <div className='co1-12'> <NavLink to='/packages'>Packages</NavLink></div>
          <div className='col-12'> <NavLink to='/about'>About</NavLink></div>
          <div className='col-12'> <NavLink to='/contact'>Contact</NavLink></div>
    </div>
</div>
  )
}


function Mynav() {
  return (
  
    <>
    <div className='navbar container d-none d-sm-flex d-md-flex rounded-1 text-light text-center'>
          <div className=' row col-12    justify-content-end '>
                <div className='col-5 col-sm-2'></div>
                <div className='col'><NavLink to='/'>Home</NavLink></div>
                <div className='col'><NavLink to='/gallery'>Gallery</NavLink></div>
                <div className='col'> <NavLink to='/packages'>Packages</NavLink></div>
                <div className='col'> <NavLink to='/about'>About</NavLink></div>
                <div className='col'> <NavLink to='/contact'>Contact</NavLink></div>
          </div>
   </div>

       
  
  </>
    
  
  )
}

export  {Mynav, Mymob}