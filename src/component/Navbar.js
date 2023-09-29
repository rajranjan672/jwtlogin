import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../component/Navbar.css"
import { Button } from 'bootstrap'
import axios from 'axios'
 const a = axios.defaults.withCredentials = true

const Navbar = () => {

  const navigate = useNavigate()

  const [data, setData] = useState([])
  // const [data1, setData1] = useState([])

  useEffect(() => {

      gett()
      
  }, [data.email])

  const logout = () => {
    axios.get("http://localhost:3001/api/User/logout")
    navigate("/login")
    
  }
  const gett = async() => {
    try{ const ress = await axios.get("http://localhost:3001/api/User/get",  {withCredentials: true} )
      setData(ress.data)
      console.log(ress.data)
      console.log(ress.data.username)
 } catch {
     navigate("/login")
 }
 }

  
  return (
    <>
       {a ? (<div className='navbar'>
        
    <ul>
        <li><NavLink to="/home" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-item">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>


    </ul>
    
          
   
      
    <ul>
    <div className="dropdown" style={{float: "right"}}>
  <button className="dropbtn">{data.username}</button>
  <div className="dropdown-content">
  {/* <button type="button" className="btn btn-warning" onClick={logout}>Logout<i className="bi bi-arrow-{data.username}"></i></button> */}
    <NavLink to="/profile" className="profile"><i className="bi bi-person-circle"> Profile</i></NavLink>
    {/* <a href="#">Link 3</a> */}
  </div>
</div>
    </ul>
    
</div>): "Unauthorised user"}


    </>
 
    
  )
}

export default Navbar