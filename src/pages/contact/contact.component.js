import React, { useEffect } from 'react'
import './contact.css'
import { useState } from 'react'






function Mycontact() {
  
let[name, setname]=useState('')  
let[email, setemail]=useState('')
let[contact, setcontact]=useState('')
let[message, setmessage]=useState('')

let[nameerr, setnameerr]=useState('')
let[emailerr, setemailerr]=useState('')
let[contacterr, setcontacterr]=useState('')
let[messageerr, setmessageerr]=useState('')



useEffect(()=>{
  if(!name){
    setnameerr("")
  }else if(name.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')){
    setnameerr("invalid name")
  }
  else {
    setnameerr(' ')
  }
},[name])


useEffect(()=>{
  if(!email){
    setemailerr("")
  }else if(email.includes(' ')||(!email.includes('@') || !email.includes('.com'))){
    setemailerr("Invalid Email")
  }
 
  else{
    setemailerr(' ')
  }
},[email])

useEffect(()=>{
  if(!contact){
    setcontacterr("")
  }else if(!(contact.length>9&&contact.length<11)||!contact.startsWith('98')){
    setcontacterr("Invalid contact")
  }
  else{
    setcontacterr(' ')
  }
},[contact])

useEffect(()=>{
  if(!message){
    setmessageerr("Enter your Inquiry")
  }else{
    setmessageerr('')
  }
},[message])

  const Handlesubmit=(ev)=>{
    ev.preventDefault();
    console.log("fullname",name)
    console.log("email",email)
    console.log("contact",contact)
    console.log("message", message)
    
    }



  return (
      <>
    <div className='container-fluid justify-content-center align-items-center text-center border border-info' 
    style={{backgroundColor:"linear gradient(red , yellow)"}}>

      {/* <form onSubmit={Handlesubmit}> 
      <div className='container '>

          <div>
          <label>Full name</label>
          <input type='text' name='name' ></input>
          </div>
          <div className='row'>
          <label>Email Address</label>
          <input type='email' name='email' ></input>
          </div>
       
          <div>
          <label>Contact</label>
          <input type='tel' name='phone' ></input>
          </div>
        <div className=''></div>
        <div>third row</div>

      </div>

      </form> */}
      
      <div className='container col-md-6 col-sm-12 col-12   p-sm-2 p-md-4 my-3 justify-content-center rounded-3 text-white '  style={{backgroundColor:"skyblue"}}>
          <div className='col-12 mb-3 mt-5'><h4>Message Us</h4></div>
          <form className=' text-start col-12 my-3 px-4 justify-content-center ' onSubmit={Handlesubmit}>
          
            <label>Full name:   <span className='text-danger'>*{nameerr}</span></label>
            <input className='col-12 rounded-3 mb-2'  type='text' name='name' onChange={(ev)=>{
              setname(ev.target.value)
            }} required></input>
            
            <label>Email address: <span className='text-danger'>*{emailerr}</span></label>
            <input className='col-12 rounded-3 mb-2'  type='email' name='email' onChange={(ev)=>{
              setemail(ev.target.value)
            }}  required></input>

            <label>Contact:  <span className='text-danger'>*{contacterr}</span></label>
            <input className='col-12 rounded-3 mb-2' type='contact' name='contact' onChange={(ev)=>{
              setcontact(ev.target.value)
            }}  required></input>

            <label>Your Enquiry: <span className='text-danger'>*{messageerr}</span></label>
            <textarea className="form-control rounded-3 mb-2" aria-label="With textarea"  name='message' type="text" style={{height:"100px"}} 
            onChange={(ev)=>{
              setmessage(ev.target.value)
            }}  required></textarea>
            <div  className='d-flex justify-content-center'>
            <button className=' text-center my-3   justify-content-center rounded-3' type='submit' onSubmit={Handlesubmit} style={{backgroundcolor:"#FAEEE9"}}>Submit</button>
            </div>

          </form>
        </div>
  

    </div>



       <div className='container d-flex flex-md-row flex-sm-column flex-column border   my-1 text-center rounded-3 justify-content-between'
       style={{backgroundImage:"url(../../assets/image8.png)"}} >
        <div className='col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center   mt-5'>
          <img className='img-fluid d-md-block d-sm-none d-none  ' src={require('../../assets/image9.png')} alt='contact'></img>
          <div className='d-flex d-sm-flex d-md-none' ><h2 style={{fontFamily:"Tangerine', cursive;"}}>Enhance your beauty</h2></div>
        </div>



        <div className='col-md-5 col-sm-12 col-12   my-5  rounded-3 text-white '  style={{backgroundColor:"#A77A95"}}>
          <div className='col-12 mb-3 mt-5'><h4>Message Us</h4></div>
          <form className=' text-start col-12 my-3 px-4 justify-content-center ' onSubmit={Handlesubmit}>
            <span>{nameerr}
            </span>
            <input className='col-12 rounded-3 mb-2'  type='text' name='name' onChange={(ev)=>{
              setname(ev.target.value)
            }}></input>
            <span>{emailerr}
            </span>
            <input className='col-12 rounded-3 mb-2'  type='email' name='email' onChange={(ev)=>{
              setemail(ev.target.value)
            }}></input>

            <span>{contacterr}
            </span>
            <input className='col-12 rounded-3 mb-2' type='contact' name='contact' onChange={(ev)=>{
              setcontact(ev.target.value)
            }}></input>

            <span >{messageerr}
            </span>
            <textarea className="form-control rounded-3 mb-2" aria-label="With textarea"  name='message' type="text" style={{height:"100px"}} 
            onChange={(ev)=>{
              setmessage(ev.target.value)
            }}></textarea>
            <div  className='d-flex justify-content-center'>
            <button className=' text-center mt-3   justify-content-center rounded-2' type='submit' onSubmit={Handlesubmit} style={{backgroundcolor:"#FAEEE9"}}>Submit</button>
            </div>

          </form>
        </div>
  
      
        
     
       
      </div> 
      </>
  )
}

export default Mycontact