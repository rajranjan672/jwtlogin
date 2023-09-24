import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import "../component/Home.css"
import Error from './Error'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const a = axios.defaults.withCredentials = true

    const [data, setData] = useState([])
    // const [data1, setData1] = useState([])

    useEffect(() => {

        gett()
        
    })

   

    const navigate = useNavigate()
    const card = () => {
        navigate("/profile")
    }

    const gett = async() => {
       try{ const ress = await axios.get("http://localhost:3001/api/User/get",  {withCredentials: true} )
         setData(ress.data)
         console.log(ress.data)
    } catch {
        navigate("/login")
    }
    }

    // const user = async() => {
    //     const ress = await axios.get("http://localhost:3001/api/data/data", data1)
    //     setData1(ress.data)
    // }
  return (
    <>
      {a? <Navbar />: <Error />}  
    
    {/* {data1.map((item) => {
        <p>{item.email}</p>
    })} */}
    
            
   
               
                
                    <p>{data.email}</p>
                
            
   

    <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>

<i class="bi bi-person-fill"></i>
    <div class="container">
        <div class="card" onClick={card}>
            <div class="face face1">
                <div class="outer">
                    <h1 class="title">Canyons</h1>
                    <img src="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=
                    " alt="" />
                </div>
            </div>
            <div class="face face2">
                <div class="inner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur quidem veritatis, quam quis nostrum voluptas officiis ducimus alias nulla laboriosam quia molestias similique, non ea ipsa eos obcaecati quaerat ullam? Consectetur placeat accusantium ex.</p>
                    <a href="#" type="button">Read More</a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="outer">
                    <h1 class="title">Beaches</h1>
                    <img src="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=

                    " alt="" />
                </div>
            </div>
            <div class="face face2">
                <div class="inner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur quidem veritatis, quam quis nostrum voluptas officiis ducimus alias nulla laboriosam quia molestias similique, non ea ipsa eos obcaecati quaerat ullam? Consectetur placeat accusantium ex.</p>
                    <a href="#" type="button">Read More</a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="outer">
                    <h1 class="title">Trees</h1>
                    <img src="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=
                    " alt="" />
                </div>
            </div>
            <div class="face face2">
                <div class="inner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur quidem veritatis, quam quis nostrum voluptas officiis ducimus alias nulla laboriosam quia molestias similique, non ea ipsa eos obcaecati quaerat ullam? Consectetur placeat accusantium ex.</p>
                    <a href="#" type="button">Read More</a>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home