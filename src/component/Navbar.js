import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../component/Navbar.css"
import { Button } from 'bootstrap'
import axios from 'axios'
 const a = axios.defaults.withCredentials = true

const Navbar = (props) => {

  const navigate = useNavigate()

  const logout = () => {
    axios.get("http://localhost:3001/api/User/logout")
    navigate("/login")
    
  }

  
  return (
    <>
       {a ? (<div className='navbar'>
    <ul>
        <li><NavLink to="/home" className="nav-item">Home</NavLink></li>
    </ul>
   
    <ul>
    <ul>
    <div class="dropdown" style={{float: "right", marginRight:"10px"}}>
      <h2>{props.email}</h2>
  <button class="dropbtn">Right</button>
  <div class="dropdown-content">
  <button type="button" className="btn btn-warning" onClick={logout}>Logout<i class="bi bi-arrow-right"></i></button>
    <NavLink to="/profile" className="profile"><i class="bi bi-person-circle"> Profile</i></NavLink>
    <a href="#">Link 3</a>
  </div>
</div>
    </ul>
    </ul>
</div>): "Unauthorised user"}


    </>
 
    
  )
}

export default Navbar