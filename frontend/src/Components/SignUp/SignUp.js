import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {

const history = useNavigate()

  const [user,setUser] = useState({//calling data set
    name:"",
    password:"",
    gmail:"",
    phone:"",
    address:"",
  })

  const handleInputChange =(e) =>{
    const {name,value} = e.target
    setUser((prevUser) => ({
      ...prevUser,[name]: value
    }))
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    
    sendRequest().then(()=>{
      alert("Successfully Signed up") 
      history('/mainhome')//redirecting page
  }).catch((err) => {
    alert(err.message)
  }) // 2 different ways
  }

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/signUp",{
      name:String(user.name),
      password:String(user.password),
      gmail:String(user.gmail),
      phone:Number(user.phone),
      address:String(user.address),
    }).then(res => res.data)
  } 
  return (

    <div>

      <Nav/>

      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <br></br>
        <input type = "text" value={user.name} name="name" onChange={handleInputChange}  required></input>
        <br></br>
        <br></br>

        <label>Password</label>
        <br></br>
        <input type = "password" value={user.password} onChange={handleInputChange}  name="password" required></input>
        <br></br>
        <br></br>

        <label>Gmail</label>
        <br></br>
        <input type = "email" value={user.gmail}  onChange={handleInputChange}  name="gmail" required></input>
        <br></br>
        <br></br>

        <label>Phone</label>
        <br></br>
        <input type = "tel" value={user.phone} onChange={handleInputChange}  name="phone" required></input>
        <br></br>
        <br></br>

        <label>Address</label>
        <br></br>
        <input type = "text"  value={user.address}  onChange={handleInputChange}  name="address" required></input>
        <br></br>
        <br></br>

        <button>Sign Up</button>
      </form>

    </div>
  )
}
