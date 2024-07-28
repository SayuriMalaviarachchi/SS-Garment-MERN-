import React,{useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import axios from "axios"
import UserDetails from "../User/UserDetails" 


const URL = "http://localhost:5000/users"

const fetchHandler = async () =>{
  return await axios.get(URL).then((res) => res.data)
}

export default function Users() {

  const [users , setUsers] = useState()

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users))
  },[])

  return (

    <div>

        <Nav/>

        <h1>All Users</h1>

        <div>

          {users && users.map((user,i) => (
            <div key = {i}>
              <UserDetails user = {user}/>

            </div>
          ))}


        </div>
    </div>
  )
}
