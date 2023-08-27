import React, { useState, useEffect } from 'react'

function Myregister() {

const [rname, setrname]=useState('')
const[rnameerr,setrnameerr]=useState('')

const [raddress, setraddress]=useState('')
const [raddresserr, setraddresserr]=useState('')

const [rgender, setrgender]=useState('')

const[remail,setremail]=useState('')
const[rcontact,setrcontact]=useState('')

const[rpassword,setrpassword]=useState('')



useEffect((ev)=>{
  if(rname.includes(Int16Array)){
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


const handleRegister=(ev)=>{
  ev.preventDefault()
  console.log("register  name:",rname);
  console.log("register address:",raddress);
  console.log("register gender:",rgender);
  console.log("register email:",remail);
  console.log("register Contact:",rcontact);
  console.log("register Password:",rpassword);

}

  return (
    <>
    <div className='container-fluid d-flex text-dark flex-column justify-content-center align-items-center '>
      <h1 className='mt-3'>Register Now</h1>
        <div className='col-md-5 col-sm-12 col-12  border border-info text-dark bg-info my-5 rounded-5  '>
            <form className='mb-5' onSubmit={handleRegister}>
              <div className='d-flex flex-column col-12 my-3'>
                <label>Enter you full name <span className='text-danger'>* {rnameerr}</span></label>
                <input className='rounded-3' type='text' name='rname' onChange={(ev)=>{
                  setrname(ev.target.value) 
                }} required maxLength={30} minLength={4} valid={"[0-9]"}></input>
              </div>
              <div className='d-flex flex-column  col-12 my-3'> 
                <label>Enter your address <span className='text-danger'>*{raddresserr}</span></label>
                <input className='rounded-3' type='text ' name='raddress' onChange={(ev)=>{
                  setraddress(ev.target.value) 
                }} required></input>
                <span></span>
              </div>
             
              <div className='d-flex flex-column col-12 my-2  justify-content-center'>
                <label className='my-0'>Gender: <span className='text-danger '>*</span> </label>
                  <div className='d-flex gap-2  justify-content-start align-items-center '>
                    <input  type='radio' name='rgender' value={"male"} onChange={(ev)=>{setrgender(ev.target.value)}} required></input>
                    <label>Male</label>
                    <input type='radio' name='rgender' value={"female"} onChange={(ev)=>{setrgender(ev.target.value)}} ></input>
                    <label>Female</label>
                    <input type='radio' name='rgender' value={"others"} onChange={(ev)=>{setrgender(ev.target.value)}}></input>
                    <label>Others</label>
                  </div>

              </div>
              
              <div className='d-flex flex-column col-12 my-3'> 
                <label>Enter your Email <span className='text-danger'>*</span></label>
                <input className='rounded-3' type='email' name='remail' onChange={(ev)=>{
                  setremail(ev.target.value) 
                }} required></input>
                <span></span>
              </div>
              <div className='d-flex flex-column col-12 my-3'> 
                <label>Contact <span className='text-danger'>*</span></label>
                <input className='rounded-3' type='tel' pattern="[9]{1}[8]{1}[0-9]{8}" minLength={10} maxLength={10}
                onChange={(ev)=>{
                  setrcontact(ev.target.value) 
                }} placeholder='98......' required></input>
                <span></span>
              </div>
              <div className='d-flex flex-column col-12 my-3'> 
                <label>Password<span className='text-danger'>*</span></label>
                <input className='rounded-3' type='password'   onChange={(ev)=>{
                  setrpassword(ev.target.value) 
                }} required></input>
                <span></span>
              </div>
             
              <div className='d-flex col-12 mb-5'>
              <button type='submit'onSubmit={handleRegister} className='rounded-3 mx-auto justify-content-center'>Register</button>
              </div>
              
            </form>
        </div>
    </div>

    </>
  )
}

export default Myregister