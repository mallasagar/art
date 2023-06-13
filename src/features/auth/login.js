import React, { useState, useEffect } from 'react'
import'./login.css'





function Mylogin() {
    
    let [useremail, setuseremail]=useState()
    let [userpassword, setuserpassword]=useState()
    let [emailerror, setemailerror]= useState('')
    let [passworderror, setpassworderror ]=  useState('')


    useEffect(()=>{
        if(!useremail){
            setemailerror("Enter Email")
        }else {
            setemailerror("")
        }
    },[useremail])

    useEffect(()=>{
        if(!userpassword){
            setpassworderror("Enter password")
        }else {
            setpassworderror(" ")
        }
    },[userpassword])


    const Handlesubmit=(ev)=>{
        ev.preventDefault();
        console.log("useremail:", useremail);
        console.log("userpassword:", userpassword)
    }



  return (
   <>
        <form onSubmit={Handlesubmit} className='container col-10 col-sm-8 col-md-4 py-sm-3  justify-content-center align-item-center mt-5 py-5 px-5 rounded-4  text-white' style={{
            backgroundColor:"#735366"
        }}>
            <div className=" col-12 py-2 myloginemail  mt-5">
                <span className='col-12 justify-content-center'>Enter User Email:</span>
                <input  className='col-12  rounded-2' type='email'  name="useremail" onChange={(ev)=>{setuseremail(ev.target.value)}}></input>
                <span  className='text-danger'>{emailerror}</span>
            </div>
            <div className="col-12 ">
                <span className='col-12'>Enter pasword</span>
                <input className='col-12  rounded-2' type='password'  name="userpassword" onChange={(ev)=>{setuserpassword(ev.target.value)}}></input>
                <span className=' text-danger'>{passworderror}</span>
            </div>
            <div className='row  col-12  justify-content-center '>
                <button className='text-center my-4 col-3 col-sm-8 col-md-6 rounded-2  text-light ' style={{
                    backgroundColor:"var(--darkpurple) ", border:"2px solid var(--nude)"}}
                    type='submit' onSubmit={Handlesubmit}>Login</button>
                <span className='text-danger'></span>
            </div>
   </form>
   </>
  )
}

export default Mylogin