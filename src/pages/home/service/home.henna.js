import React from 'react'
import './home.henna.css'

function Homehenna() {
  return (
<>
<div className='container '>
    {/* Heena art */}
    <div className='d-flex flex-row justify-content-start '>
        <div className="card  rounded-3 mb-3 col-md-8 col-sm-12 col-12 mt-2 py-2  text-black" 
        style={{maxwidth: "100px;",backgroundColor:"whitesmoke", border:"1px solid #FAEEE9"}}>
            <div className=" g-0 row">
            <div className="col-md-6 ">
            <img src={require("../../../assets/img1.jpeg")} style={{height:'300px', width:"auto", border:"2px solid  #FAEEE9"}}
            className="card-img img-fluid rounded mx-auto d-block " alt="..."/>
            </div>
            <div className="col-md-6">
            <div className="card-body">
            
                <h3 className="card-title card-title-henna">Henna Art</h3>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button className='rounded-3 bg-info ' style={{border:"1px solid skyblue", color:'pink'}}>See More</button>

            </div>
            </div>
        </div>
        </div>
    </div>
{/* Bridal Makeup */}
    <div className='d-flex flex-row justify-content-end'>
        <div className="card  rounded-3 mb-3 col-md-8 col-sm-12 col-12 mt-2 py-2  text-black "
        style={{maxwidth: "100px;",backgroundColor:"whitesmoke", border:"1px solid #FAEEE9"}}>
        <div className="row g-0">
            <div className="card-img col-md-6 ">
            <img src={require("../../../assets/img1.jpeg")} style={{height:'300px', width:"auto",border:"2px solid  #FAEEE9"}}
            className="img-fluid rounded mx-auto my-2 d-block" alt="..."/>
            </div>
            <div className="col-md-6">
            <div className="card-body">
                <h3 className="card-title card-title-henna">Bridal Makeup</h3>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button className='rounded-3 bg-info ' style={{border:"1px solid skyblue", color:'pink'}}>See More</button>

            </div>
            </div>
        </div>
        </div>
    </div>

{/* Nail Art */}
    <div className='d-flex flex-row justify-content-start '>
        <div className="card rounded-3  mb-3 col-md-8 col-sm-12 col-12 mt-2 py-2   text-black" 
        style={{maxwidth: "100px;",backgroundColor:"whitesmoke", border:"1px solid #FAEEE9"}}>
            <div className=" g-0 row">
            <div className="col-md-6  card-img">
            <img src={require("../../../assets/img4.jpeg")} style={{height:'300px', width:"auto",border:"2px solid  #FAEEE9"}}
            className="card-img img-fluid rounded mx-auto d-block" alt="..."/>
            </div>
            <div className="col-md-6">
            <div className="card-body">
            
                <h3 className="card-title card-title-henna">Nail Art</h3>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button className='rounded-3 bg-info ' style={{border:"1px solid skyblue", color:'pink'}}>See More</button>

            </div>
            </div>
        </div>
        </div>
    </div>
</div>
</>
  )
}

export default Homehenna