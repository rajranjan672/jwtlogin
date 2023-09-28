import React from 'react'
import Navbar from './Navbar'
import "../component/About.css"
const About = () => {
  return (
    <>
       <div className='about'>
       <div>About</div>
       <div className='container'>
        <div className='row'>
        <div className="card col-8 col-sm-8 col-md-5 col-lg-4" >
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        </div>
       </div>
        </div> 
      
      

    </>
  )
}

export default About