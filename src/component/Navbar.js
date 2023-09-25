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
 } catch {
     navigate("/login")
 }
 }

  
  return (
    <>
       {a ? (<div className='navbar'>
    <ul>
        <li><NavLink to="/home" className="nav-item">Home</NavLink></li>
    </ul>
   
    <ul>
      <ul>
      <h2>{data.username}</h2>
      </ul>
    <ul>
    <div class="dropdown" style={{float: "right", marginRight:"10px"}}>
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