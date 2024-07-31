import React, { useState }  from 'react'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const history = useNavigate()

  const [user,setUser] = useState({//calling data set
    gmail:"",
    password:"",
  })

  const handleInputChange =(e) =>{
    const {name,value} = e.target
    setUser((prevUser) => ({
      ...prevUser,[name]: value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const respone = await sendRequest() 
        if(respone.status === "ok"){
            alert("Successfully Logged In") 
            history('/mainHome')//redirecting page
        }
        else{
            alert("Login Error");
        }
     } catch(err){
        alert("error" + err.message)
     }
    }

  const sendRequest = async() =>{
    return await axios.post("http://localhost:5000/login",{
      gmail:String(user.gmail),
      password:String(user.password),
    }).then(res => res.data)
  } 
  return (
    <div>
      
      <Nav/>

      <h1> Login </h1>

      <form onSubmit={handleSubmit}>

        <label>Gmail</label>
        <br></br>
        <input type = "email" value={user.gmail}  onChange={handleInputChange}  name="gmail" required></input>
        <br></br>
        <br></br>


        <label>Password</label>
        <br></br>
        <input type = "password" value={user.password} onChange={handleInputChange}  name="password" required></input>
        <br></br>
        <br></br>

        <button>Login</button>

      </form>
    </div>
  )
}
