import React from 'react'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import  img3 from '../../assets/img3.jpeg'


function Myhomebanner() {
  return (
    <>


        <div id="carouselExampleAutoplaying" className="carousel slide justify-content-center " data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active justify-content-center " data-bs-interval="10000">
              <img src={img1} className="d-block rounded float-center   " alt="img 1" style={{height:"100%", width:"80%" ,objectFit:"contain;"}}/>
            </div>
            <div className="carousel-item justify-content-center" data-bs-interval="5000">
              <img src={img2} className="  d-block rounded float-center " alt="img 2" style={{height:'400px', width:"500px",objectFit:"contain;"}}/>
            </div>
            <div className="carousel-item justify-content-center" data-bs-interval="5000">
              <img src={img3} className="  d-block rounded float-center " alt="img 3" style={{height:'400px', width:"500px",objectFit:"contain;"}}/>
            </div>
          </div> 
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <div  id="carouselExample" className='carousel slide'>
        <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../assets/img1.jpeg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="../../assets/img2.jpeg" class="d-block w-100" alt="...">dwada</img>
            </div>
            <div class="carousel-item">
              <img src="../../assets/img3.jpeg" class="d-block w-100" alt="...">daw wad</img>
            </div>
          </div>
                  
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>

        </div> */}

    </>         

  )
}

export default Myhomebanner