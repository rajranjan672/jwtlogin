import React from 'react'
import Navbar from './Navbar'
import Error from './Error'
import "./Contact.css"
import { CircularProgressbar } from 'react-circular-progressbar';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
const Contact = () => {

  const percentage = 66;

  return (
    <>
      <div>Contact</div>
      <div className='container'>
        <div className='row' style={{ width: 200, height: 200 }}>
        
      <CircularProgressbar value={percentage}   text={`Total ${percentage}%`} />

      </div>
      <div style={{borderRadius:"50%"}}>
        {/* <GroupAddIcon /> */}
      </div>
        </div>
     

    </>
  )
}

export default Contact