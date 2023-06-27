import React from 'react'
import'./service.css'
import '../../index.scss'
import { NavLink } from 'react-router-dom'

function Myservice() {
  return (
       
         







    <div className='container-fluid justify-content-evenly 
    my-3  py-3 px-3 d-flex flex-column align-items-center text-center flex-sm-column flex-column  flex-md-row 
    '>

      {/* henn art */}
      <div class="card bg-dark servicehenna ">
          <img src={require("../../assets/img1.jpeg")} 
            className="card-img img-fluid rounded-3 float-end d-block hennaart " alt="Henna art"></img>
            <div class="card-img-overlay ">
              <h1 class="card-body">Henna Art</h1>
            </div>
      </div>

      {/* makeup */}
         <div class="card bg-dark  servicehenna " >
          <img src={require("../../assets/img6.jpeg")} 
              className="card-img img-fluid rounded-3 float-end d-block" alt="Bridal Makeup"></img>
              <div class="card-img-overlay">
                <h1 class="card-body">Makeup</h1>
                </div>
          </div>  

          {/* nail extension */}
          <NavLink to='/'>
        <div class="card bg-dark  servicehenna">
           <img src={require("../../assets/img4.jpeg")} 
            className="card-img img-fluid rounded-3 float-end d-block" alt="Nail Extension"></img>
            <div class="card-img-overlay ">
              <h1 class="card-body">Nail Extension</h1>

            
            </div>
        </div>
              </NavLink>

    </div>    
  )
}

export default Myservice