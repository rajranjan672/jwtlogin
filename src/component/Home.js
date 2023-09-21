import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
axios.defaults.withCredentials = true
const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        gett()
    })

    const gett = async() => {
        const ress = await axios.get("http://localhost:3001/api/User/get", data, )
        setData(ress.data)
    }
  return (
    <>
    <Navbar />
    <div>
        {data.map((item) => {
            <p>{item.username}</p>
        })}
    </div>

    </>
  )
}

export default Home