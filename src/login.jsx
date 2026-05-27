import React from "react";
import './login.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login(){
       
        const [email, setEmail]=useState()
        const [password, setPassword]=useState()
        const navigate =useNavigate()

        const handleSubmit = (e)=> {
            e.preventDefault()
            axios.post('http://localhost:3001/login',{email,password})
            .then(result => {
                console.log(result)
                if(result.data === "success"){
                navigate('/lms')
                }
        })
            .catch(err=> console.log(err))
         
        }

    return(
        <>
         <div className="login-box">
            <h2>Login</h2>

    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}
        required></input>
      </div>

      <div className="input-box">
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
         required></input>
      </div>

      <button type="submit" className="login-btn">Login</button>

      <div className="footer-text">
        Don't have an account? <a href="/register">Register</a>
      </div>
    </form>
  </div>

        </>

    )
}

export default Login