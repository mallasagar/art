import React from 'react'
import './header.component.css'
import {FaInstagram, FaTiktok, FaFacebookF} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

function Myheader() {
  return (
    <>
    <div className=' header-icons container col-10 d-none d-md-flex justify-content-end  py-2 '>
        <div className=' mx-2 rounded-3 '><FaInstagram className=' text-dark  rounded-2' size={'21px'}></FaInstagram></div>
        <div className=' mx-2 rounded-3 ' ><FaTiktok className='text-dark rounded-2' size={'21px'}></FaTiktok></div>
        <div className=' mx-2 rounded-3 '><FaFacebookF className=' text-dark rounded-2 ' size={'21px'}/></div>
        <div className=' mx-2 rounded-3 '><SiGmail className=' text-dark rounded-2' size={'21px'}/></div>
  </div>
    </>
  )
}

export default Myheader