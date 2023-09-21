import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../component/Navbar.css"
import { Button } from 'bootstrap'
import axios from 'axios'
 const a = axios.defaults.withCredentials = true

const Navbar = () => {

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
    <button type="button" className="btn btn-warning" onClick={logout}>Logout</button>
    </ul>
</div>): "Unauthorised user"};
    </>
 
    
  )
}

export default Navbar