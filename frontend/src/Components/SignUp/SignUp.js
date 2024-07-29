import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {

  const history = useNavigate()

  const [inputs,setInputs] = useState({//calling data set
    name:"",
    gmail:"",
    phone:"",
    address:"",
  })

  const handleChange =(e) =>{
    setInputs ((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit =(e) =>{//redirecting page
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=> history('allUsers'))
  }

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/users",{
      name:String(inputs.name),
      gmail:String(inputs.gmail),
      phone:Number(inputs.phone),
      address:String(inputs.address),
    }).then(res => res.data)
  }
  return (

    <div>

      <Nav/>

      <h1>SignUp</h1>

      <form onSubmit={handleSubmit}>

        <label>name</label>
        <br></br>
        <input type = "text" name="name" onChange={handleChange} value={inputs.name} required></input>
        <br></br>
        <br></br>

        <label>gmail</label>
        <br></br>
        <input type = "gmail" name="gmail" onChange={handleChange}  value={inputs.gmail}  required></input>
        <br></br>
        <br></br>

        <label>phone</label>
        <br></br>
        <input type = "tel" name="phone" onChange={handleChange}  value={inputs.phone}  required></input>
        <br></br>
        <br></br>

        <label>address</label>
        <br></br>
        <input type = "text" name="address" onChange={handleChange}  value={inputs.address}  required></input>
        <br></br>
        <br></br>

        <button>Submit</button>
      </form>

    </div>
  )
}
