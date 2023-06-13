import React from 'react'
import'./login.css'






function Mylogin() {
  return (
   <>
        <div className='container col-10 col-sm-8 col-md-4  justify-content-center align-item-center mt-5 py-5 px-5 rounded-4  text-white' style={{
            backgroundColor:"#735366"
        }}>
            <div className=" col-12 py-2 myloginemail  mt-5">
                <span className='col-12 justify-content-center'>Enter User Email:</span>
                <input  className='col-12  rounded-2' type='email'  name="email"></input>
                <span  className='text-danger'>error</span>
            </div>
            <div className="col-12 ">
                <span className='col-12'>Enter pasword</span>
                <input className='col-12  rounded-2' type='password'  name="password"></input>
                <span className=' text-danger'>error</span>
            </div>
            <div className='row  col-12  justify-content-center '>
                <button className='text-center  col-3 col-sm-8 col-md-6 rounded-2  text-light ' style={{
                    backgroundColor:"var(--darkpurple) ", border:"2px solid var(--nude)"
                }}>Login</button>
                <span className='text-danger'></span>
            </div>
   </div>
   </>
  )
}

export default Mylogin