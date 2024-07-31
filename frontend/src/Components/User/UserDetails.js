import React from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function User(props) {

    const{_id,name,password,gmail,phone,address} = props.user

    //delete fuction

    const history = useNavigate()

    const deleteHandler = async() => {
      await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(res => res.data)
      .then(() => history("/")) 
      .then(() => history("/allUsers"))
    }

    
  return (
    <div>
      
      <h1>User Details</h1>

      <br></br>

      
      <h1>ID:{_id}</h1>   
      <h1>Name:{name}</h1>
      <h1>Password:{password}</h1>
      <h1>Gmail:{gmail}</h1>
      <h1>Phone:{phone}</h1>
      <h1>Address:{address}</h1>

      <Link to ={`/allUsers/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>

    </div>
  )
}
