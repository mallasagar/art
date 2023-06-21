import React from 'react'
import './footer.component.css'
import {GiButterfly} from 'react-icons/gi'

function Myfooter() {
  return (
    
<footer className="text-center text-lg-start bg-white text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-tiktok"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
     
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
     
     
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5 ">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
          <h6 className="text-uppercase fw-bold mb-4">
            
            <GiButterfly></GiButterfly>Beauty in you
            
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Packages
          </h6>
          <p>
            <a href="#!" className="text-reset">Bridal</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Pre-wedding</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Photoshoot</a>
          </p>
          <p>
            <a href="#!" className="text-reset">combo</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <a href="#!" className="text-reset">Makeup</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Henna art</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Nail Extension</a>
          </p>
          <p>
            <a href="#!" className="text-reset">others</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Kathmandu, Baneshwor, Nepal</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            beautyinyou0770@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> +977 9860185231</p>
        </div>
      </div>
    </div>
  </section>

  <div className="copyright text-center p-4 " >
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> sagarmalla.com.np</a>
  </div>
</footer>
  )
}

export default Myfooter