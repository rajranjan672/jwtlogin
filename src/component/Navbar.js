import React from 'react'
import { NavLink } from 'react-router-dom'
import "../component/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to="/home" className="nav-item">Home</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar