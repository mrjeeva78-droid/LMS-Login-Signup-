import { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup(){
        const [name, setName]=useState()
        const [email, setEmail]=useState()
        const [password, setPassword]=useState()
        const navigate =useNavigate()

        const handleSubmit = (e)=> {
            e.preventDefault()
            axios.post('http://localhost:3001/register',{name,email,password})
            .then(result => console.log(result))
            navigate('/login')
            .catch(err=> console.log(err))
         
        }

    return (
        <div className="signup-box">
            <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
        <div className="input-box">
            <input type="text"
             placeholder="Full Name"
             onChange={(e)=>setName(e.target.value)}
              required ></input> 
        </div>

        <div className="input-box">
            <input type="email" placeholder="Email Address"
             onChange={(e)=>setEmail(e.target.value)}
             required></input>
        </div>

        <div className="input-box">
            <input type="password" placeholder="Password" 
             onChange={(e)=>setPassword(e.target.value)} required></input>
        </div>

      

        <button type="submit" className="signup-btn">Sign Up</button>
        <div className="footer-text">
            Already have an account? <a href="/login">Login</a>
        </div>
    </form>
  </div>
   
        
    )
}

export default Signup