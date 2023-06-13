import React from 'react'
// import {AiOutlineMail} from 'react-icons/ai'
import './header.component.css'

function Myheader() {
  return (
    <>
    <div className='container-fluid row position-relative align-items-center justify-content-center '>

          <div className=' col-5 row  justify-content-start'>
            <h1>Beauty in you</h1>
          </div> 
            <div className=' col-5  row justify-content-end d-none d-sm-flex d-m-flex align-items-center'>
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