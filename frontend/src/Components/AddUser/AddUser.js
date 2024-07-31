import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {

const history = useNavigate()

  const [inputs,setUser] = useState({//calling data set
    name:"",
    password:"",
    gmail:"",
    phone:"",
    address:"",
  })

  const handleChange =(e) =>{
    setUser((prevState) => ({
    ...prevState,
    [ e.target.name]:  e.target.value
    }))
  }

  const handleSubmit =(e) =>{//what will happen when submit button is pressed.
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/mainhome'))//redirecting page
   // 2 different ways
  }

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/users",{
      name:String(inputs.name),
      password:String(inputs.password),
      gmail:String(inputs.gmail),
      phone:Number(inputs.phone),
      address:String(inputs.address),
    }).then(res => res.data)
  } 
  return (

    <div>

      <Nav/>

      <h1>Add user</h1>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <br></br>
        <input type = "text" name="name" onChange={handleChange} value={inputs.name} required></input>
        <br></br>
        <br></br>

        <label>Password</label>
        <br></br>
        <input type = "Password" name="password" onChange={handleChange}  value={inputs.password}  required></input>
        <br></br>
        <br></br>

        <label>Gmail</label>
        <br></br>
        <input type = "gmail" name="gmail" onChange={handleChange}  value={inputs.gmail}  required></input>
        <br></br>
        <br></br>

        <label>Phone</label>
        <br></br>
        <input type = "tel" name="phone" onChange={handleChange}  value={inputs.phone}  required></input>
        <br></br>
        <br></br>

        <label>Address</label>
        <br></br>
        <input type = "text" name="address" onChange={handleChange}  value={inputs.address}  required></input>
        <br></br>
        <br></br>

        <button>Add User</button>
      </form>

    </div>
  )
} 
