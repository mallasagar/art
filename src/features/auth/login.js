import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import'./login.css'





function Mylogin() {
    
    let [useremail, setuseremail]=useState()
    let [userpassword, setuserpassword]=useState()
    let [emailerror, setemailerror]= useState('')
    let [passworderror, setpassworderror ]=  useState('')
    let navigate=useNavigate();

    useEffect(()=>{
        if(!useremail){
            setemailerror("")
        }else if( (!useremail.includes("@")||!useremail.includes(".com"))){
            setemailerror("invalid email")

        }
        else {
            setemailerror("")
        }
    },[useremail])

    useEffect(()=>{
        if(!userpassword){
            setpassworderror("")
        }else if(userpassword.length<8) {
            setpassworderror("invalid password length!!")
        
        }else {
            setpassworderror(" ")
        }
    },[userpassword])

    useEffect(()=>{
    //    let is_logged_in= Boolean(localStorage.getItem('is_logged_in'));
    
    const is_logged_in=JSON.parse(
        localStorage.getItem("is_logged_in")
      )
     if(is_logged_in===true){
         navigate('/admin')
       }
    })

    const Handlesubmit=(ev)=>{
        ev.preventDefault();
        // console.log("useremail:", useremail);
        // console.log("userpassword:", userpassword)

        // const flag=false;
        // console.log('value of flag',flag)
        
        // localStorage.setItem('is_logged_in',Boolean(flag));
        // console.log("value of flag from localstorage", flag)
        // sessionStorage.setItem('is_logged_in', false);

        localStorage.setItem("is_logged_in",
        JSON.stringify(
            true
        )
        );

        navigate('/admin')
        
    }



  return (
   <>
        <form onSubmit={Handlesubmit} className='container col-10 col-sm-8 col-md-4 py-sm-3  justify-content-center align-item-center mt-5 py-5 px-5 rounded-4  text-white' style={{
            backgroundColor:"#735366"
        }}>
            <div className=" col-12 py-2 myloginemail  mt-5">
                 <label className='col-12 justify-content-center' for='email'>Email: 
                 <span className='text-danger'> * {emailerror}</span></label>
                <input  className='col-12  rounded-2' type='email' id='email'
                  name="useremail" 
                 onChange={(ev)=>{setuseremail(ev.target.value)}} required></input>
             
            </div>
            <div className="col-12 ">
            <label className='col-12 justify-content-center' for='password'>password:
            <span className='text-danger'> * {passworderror}</span></label>
                <input className='col-12  rounded-2'
                 type='password'  name="userpassword" 
                 onChange={(ev)=>{setuserpassword(ev.target.value)}}
                 required></input>
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