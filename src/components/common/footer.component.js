import React from 'react'

function Myfooter() {
  return (
    <div>
  <footer className=" text-center text-white"  style={{backgroundColor: "#735366"}}>
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor : "#3b5998"}}
        href="#!"
        role="button"
        ><i className="fab fa-facebook-f"></i></a>

    

      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#ac2bac"}}
        href="#!"
        role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor:" #0082ca"}}
        href="#!"
        role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>
  
    </section>
  </div>

  <div className="text-center  p-3" style={{backgroundColor:"#C3C3D5", color:"#FAEEE9"}} >
    © 2020 Copyright:
    <a className="text-white" href="https://sagarmalla.com.np"> sagarmalla.com</a>
  </div>
</footer>
  </div>
  )
}

export default Myfooter