import React from 'react'
import'./about.css'

function Myabout() {
  return (
  <>
  <div className='container-fluid  my-2'>
    <div className='card aboutuscard  '>
      <div className='row justify-content-between'>
        <div className='col-md-6 text-center'>
        <img src={require("../../assets/image11.png") }className="img-fluid rounded-start " alt="..."/>
        </div>
        <div className='col-md-6 '>
        <div className="card-body my-4">
        <h5 className=" card-title text-center ourstorytitle ">Our Story
        <hr className='ourstory mx-auto'></hr></h5>
        
        
        <p className="card-text cardbody">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text cardbody">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text cardbody">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text cardbody">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text cardbody"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
        </div>

      </div>

    </div>


  </div>

   {/* <div className="card mb-3 my-2">
  <div className="row g-1">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className=" card-title text-center ">OUR STORY</h5>
        <hr className='ourstory mx-auto'></hr>
        
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}
</>
  )
}

export default Myabout

// style={{height:"250px", width:"280px"}} 