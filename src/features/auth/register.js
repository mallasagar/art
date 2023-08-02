import React, { useState, useEffect } from 'react'

function Myregister() {

const [rname, setrname]=useState('')
const[rnameerr,setrnameerr]=useState('')

const [raddress, setraddress]=useState('')
const [raddresserr, setraddresserr]=useState('')

const [rgender, setrgender]=useState('')
const [rgendererr, setrgendererr]=useState('')
const[remail,setremail]=useState('')
const[remailerr,setremailerr]=useState('')

const[rpassword,setrpassword]=useState('')
const[rpassworderr,setrpassworderr]=useState('')

const[rcpassword, setrcpassword]=useState('')
const[rcpassworderr, setrcpassworderr]=useState('')

useEffect((ev)=>{
  if(!rname){
    setrnameerr("Name is empty")
  }else{
    setrnameerr('')
  }
},[rname])

useEffect((ev)=>{
  if(!raddress){
    setraddresserr("Address is emputy")
  }else{
    setraddresserr('')
  }
},[raddress])
useEffect((ev)=>{
  if(!rgender){
    setrgendererr("Address is emputy")
  }else{
    setrgendererr('')
  }
},[rgender])

const handleRegister=(ev)=>{
  ev.preventDefault()
  console.log("registereedname:",rname);
  console.log("register address:",raddress);
  console.log("register gender:",rgender);

}

  return (
    <>
    <div className='container-fluid d-flex text-white flex-column justify-content-center align-items-center border border-warning bg-info'>
      <h1 className='mt-3'>Register Now</h1>
        <div className='col-md-5 col-sm-12 col-12  border border-info bg-dark my-5 rounded-4 '>
            <form className='' onSubmit={handleRegister}>
              <div className='d-flex flex-column col-12 my-3'>
                <label>Enter you full name <span className='text-danger'>* {rnameerr}</span></label>
                <input type='name' name='rname' onChange={(ev)=>{
                  setrname(ev.target.value)
                }}></input>
              </div>
              <div className='d-flex flex-column  col-12 my-3'> 
                <label>Enter your address <span className='text-danger'>*{raddresserr}</span></label>
                <input type='address ' name='raddress' onChange={(ev)=>{
                  setraddress(ev.target.value)
                }}></input>
                <span></span>
              </div>
             
              <div className='d-flex flex-md-row flex-wrap flex-sm-column col-12 my-2'>Gender:<span className='text-danger'>*{rgendererr}</span> 
              <div class="form-check ms-4">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                       />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check ms-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                  <div class="form-check ms-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" ></input>
                    <label class="form-check-label" for="flexRadioDefault3">
                      Others
                    </label>
                  </div>
              </div>
              <div className='d-flex flex-column col-12 my-3'> 
                <label>Enter your Email <span className='text-danger'>*</span></label>
                <input type='email'></input>
                <span></span>
              </div>
              <div className='d-flex flex-column col-12 my-3'> 
                <label>Password<span className='text-danger'>*</span></label>
                <input type='email'></input>
                <span></span>
              </div>
              <div className='d-flex flex-column col-12 my-3'> 
                <label>Confirm Password <span className='text-danger'>*</span></label>
                <input type='email'></input>
                <span></span>
              </div>
              <div className='d-flex col-12 mb-4'>
              <button type='submit'onSubmit={handleRegister} className='rounded-3 mx-auto justify-content-center'>Register</button>
              </div>
              
            </form>
        </div>
    </div>

    </>
  )
}

export default Myregister