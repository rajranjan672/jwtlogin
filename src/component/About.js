import React from 'react'
import Navbar from './Navbar'
import "../component/About.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {

  const navigate = useNavigate()

  const [data, setData] = useState([])

  useEffect(() => {
    gett()
  }, [])

  const gett = async() => {
    try {const ress = await axios.get("http://localhost:3001/api/User/get", {withCredentials: true})
    setData(ress.data)
  } catch {
    navigate("/login")
  }
}
  return (
    <>
       <div className='about'>
       <div>About</div>
       <div className='container'>
        <div className='row'>
        
              <div className="card col-10 col-sm-10 col-md-9 col-lg-8" >
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body p-1">
                  <h3 className="card-text text-center">{data.username}</h3>
                  <p className='align-left'>{data.email}</p>
              </div>
              </div>
            
              
   
      
        </div>
        <div className='tabs'>
        <div className='row'>
          <div className='col-8 col-sm-6 col-md-4 col-lg-3 my-3'>
          <p>Hello</p>
          <div className='card'>
           
           <div className="card-body p-1">
                 <h3 className="card-text text-center">{data.username}</h3>
                 <p className='align-left'>{data.email}</p>
                 <button className='btn btn-warning'>Add</button>

             </div>
         </div>
          </div>
          <div className='col-8 col-sm-6 col-md-4 col-lg-3 my-3'>
          <p>Hello</p>
          <div className='card'>
            <div className="card-body p-1">
                  <h3 className="card-text text-center">{data.username}</h3>
                  <p className='align-left'>{data.email}</p>
                  <button className='btn btn-warning'>Add</button>
              </div>
          </div>
          </div>

          
        </div>
        </div>
        
       </div>
        </div> 
      
      

    </>
  )
}

export default About