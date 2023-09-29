import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import axios from "axios";
import Profile from "./component/Profile";
import About from "./component/About";
import Contact from "./component/Contact";

const a = axios.defaults.withCredentials = true

function App() {
  return (
    <BrowserRouter>
    <div style={{paddingBottom:"100px"}}>
    <Navbar />

    </div>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {a?  <Route path="/home" element={<Home />} />: "UnAuthorised User"}
      {a?  <Route path="/about" element={<About />} />: "UnAuthorised User"}
      {a?  <Route path="/contact" element={<Contact />} />: "UnAuthorised User"}
     

    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
