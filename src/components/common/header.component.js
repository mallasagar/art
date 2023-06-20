import React from 'react'
// import {AiOutlineMail} from 'react-icons/ai'
import './header.component.css'

function Myheader() {
  return (
    <>
    <div className='container d-none d-md-flex justify-content-end col-12 py-1'>

         
            <div className=' col-4 d-flex justify-content-end   '>
                    <a
                      className="btn text-white btn-floating m-1"
                      style={{backgroundColor: "#ac2bac"}}
                      href="#!"
                      role="button"
                      ><i className="fab fa-instagram"></i
                    ></a>
                    <a
                      className="btn text-white btn-floating m-1"
                      style={{backgroundColor:" #000000"}}
                      href="#!"
                      role="button"
                      ><i className="fab fa-tiktok"></i
                    ></a>
                    <a
                      className="btn text-white btn-floating m-1"
                      style={{ backgroundColor : "#3b5998"}}
                      href="#!"
                      role="button"
                      ><i className="fab fa-facebook-f"></i></a>

                    <a
                      className="btn text-white btn-floating m-1"
                      style={{backgroundColor: "#dd4b39"}}
                      href="#!"
                      role="button"
                      ><i className="fab fa-google"></i
                    ></a>


            </div>
  </div>
    </>
  )
}

export default Myheader