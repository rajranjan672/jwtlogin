import React, { useState } from 'react'
import "../component/Register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate()
    

    const sub = async(e) => {
        e.preventDefault()
         axios.post("http://localhost:3001/api/User/createuser", data).then((resp) => {
        //   setData(ress.data)

            console.log('res',resp.data)

         })
         navigate("/login")
    }

    const Login = () => {
        navigate("/login")
    }

  return (
    <>
    <div className='register'>
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center  ">
        <div className='col-5 col-sm-5 col-md-5 col-xl-5 m-0 p-0'>
        <div className="card size rounded-1 text-black mt-5  ">
            
             
                <div className="card-body">
  
  
                  <form onSubmit={sub}>
                    <p>Please Register your account</p>

                    <div className="form-outline">
                      <label className="form-label" htmlFor="username">Username</label>
                      <input type="text" name='username' id="username" className="form-control" required
                        placeholder="Username" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })} />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input type="email" name='email' id="email" className="form-control" required
                        placeholder="Email address" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })} />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input type="password" id="password" name='password' className="form-control"
                      onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })}
                         required />
                    </div>
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                      {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                    </div>
  
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={Login}>Login</button>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
                      </div>
                  </form>
  
                </div>
              </div>
              
            </div>
     
        </div>
    </div>
    </div>
   
  </>
  )
}

export default Register