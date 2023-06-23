import React from 'react'
import './contact.css'


function Mycontact() {
  return (
      <>
      <div className='container d-flex flex-md-row flex-sm-column flex-column border   my-3 text-center rounded-3 justify-content-between'
       style={{backgroundImage:"url(../../assets/image8.png)"}} >
        <div className='col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center   mt-5'>
          <img className='img-fluid d-md-block d-sm-none d-none  ' src={require('../../assets/image9.png')} alt='contact'></img>
          <div className='d-flex d-sm-flex d-md-none' ><h2 style={{fontFamily:"Tangerine', cursive;"}}>Enhance your beauty</h2></div>
        </div>



        <div className='col-md-5 col-sm-12 col-12   my-5  rounded-3 text-white '  style={{backgroundColor:"#A77A95"}}>
          <div className='col-12 mb-3 mt-5'><h4>Message Us</h4></div>
          <form className=' text-start col-12 my-3 px-4 justify-content-center '>
            <span>Enter your name
            <input className='col-12 rounded-3' type='text'></input>
            </span>
            <span>Enter your Email
            <input className='col-12 rounded-3' type='email'></input>
            </span>

            <span>Enter your contact
            <input className='col-12 rounded-3' type='contact'></input>
            </span>

            <span className='col-12 my-3'>
            <textarea className="form-control rounded-3" aria-label="With textarea" style={{height:"100px"}} placeholder='Enter your message'></textarea>
            </span>
            <div  className='d-flex justify-content-center'>
            <button className=' text-center mt-3   justify-content-center rounded-2' style={{backgroundcolor:"#FAEEE9"}}>Submit</button>
            </div>

          </form>
        </div>
  
      
        
     
       
      </div>
      </>
  )
}

export default Mycontact