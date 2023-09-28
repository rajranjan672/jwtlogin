import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import "../component/Home.css"
import Error from './Error'
import { LoremPicsum } from 'react-lorem-picsum'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom'
import JSONDATA from "./data.json"
const Home = () => {
    const a = axios.defaults.withCredentials = true

    const [data, setData] = useState({email: ''})
    const [countOfProgess, setCountOfProgess] = useState(0);
    let [showprogress, setShowprogress] = useState(false)
    const [inputValue, setInputValue] = useState(false);
    const[api, setApi] = useState([])
    const [inputText, changeText] = useState("")
 

    // const [data1, setData1] = useState([])

    useEffect(() => {

        gett()
         
          
        
    }, [data.email])
     
   
    //   return () => {
    //     clearInterval(timer);
    //   };
   

    const navigate = useNavigate()
    const card = () => {
        navigate("/profile")
    }

    const checked = () => {
        setInputValue(!inputValue)
        console.log(inputValue)
    }

    const gett = async() => {
       try{ const ress = await axios.get("http://localhost:3001/api/User/get",  {withCredentials: true} )
         setData(ress.data)
         console.log(ress.data)
    } catch {
        navigate("/login")
    }
    }

    // const cardget = async() => {
    //     const ress = await axios.get('https://picsum.photos')
    //     setApi(ress)
    //     console.log(ress)
    // }

    // const user = async() => {
    //     const ress = await axios.get("http://localhost:3001/api/data/data", data1)
    //     setData1(ress.data)
    // }
  return (
    <>

      <div className='home'>
    
    
                
                <p>{data.email}</p>
                <form onSubmit={((e) => e.preventDefault())}>
                    
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"  id="invalidCheck" onClick={ () => checked()} required />
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
            <div class="invalid-feedback">
            You must agree before submitting.
            </div>
            </div>
                <button className='btn btn-primary col-8 col-sm-6 col-md-4 col-lg-2 mx-2 my-2'  type='submit'  disabled={inputValue == false} onClick={() =>   setInterval((e) => {
                setShowprogress(showprogress=true)
            setCountOfProgess((oldProgress) => {
            if (100 == oldProgress) return navigate("/profile")
            return Math.min(oldProgress + Math.random() * 10, 100);
            });
            }, 499)}>Submit</button>
                </form>
                <div className='container'>
                        <div className='row'>
                                    
            {showprogress? <div style={{ display: 'block',
            width: 700, padding: 30 }}>
            <h4>React-Bootstrap ProgressBar Component</h4>
            Current Progress is: {parseInt(countOfProgess)} %
            <ProgressBar now={countOfProgess} />
            </div>: ""} 
                        </div>
                    </div>



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
            <div class="cardd" onClick={card}>
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

            <div class="cardd">
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

            <div class="cardd">
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
            <div className='container'>
            <div className='row p-0'>
            <div className="search">
            <input
            type="text"
            placeholder="Search book.."
            onChange={(event) => {
            changeText(event.target.value);
            }}
            />
            </div>

            {JSONDATA.filter((val) => {
            if (val.name.toLowerCase().includes(inputText.toLowerCase())) {
            return val;
            }
            }).map((val) => {
            return (


            <div className="card col-10 col-sm-10 col-md-4 col-lg-4" >
            <LoremPicsum
                width={250}
                height={150}
                random={Math.floor(Math.random() * 100)}
                style={{hover: 'border-radius: 10% !important;'}}
            />
            
            <h4>{val.name}</h4>
            <p>{val.author}</p>
            </div>



            )

            })} 
            </div>
</div>



      </div>
    </>
  )
}

export default Home