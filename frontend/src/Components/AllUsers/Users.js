import React,{useState, useEffect,useRef } from 'react'
import Nav from '../Nav/Nav'
import axios from "axios"
import UserDetails from "../User/UserDetails" 
import { useReactToPrint} from "react-to-print"



const URL = "http://localhost:5000/users"

const fetchHandler = async () =>{
  return await axios.get(URL).then((res) => res.data)
}

export default function Users() {

  const [users , setUsers] = useState()

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users))
  },[])

  //Report generating
  const ComponentsRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Users Report" ,
    onafterprint:()=>alert("Users Report successfully Download !")
  })

  return (

    <div>

        <Nav/>

        <h1>All Users</h1>

        <div  ref={ComponentsRef}>

          {users && users.map((user,i) => (
            <div key = {i}>
              <UserDetails user = {user}/>

            </div>
          ))}
           

        </div>
        <button onClick={handlePrint}>Download User Details Report</button>
    </div>
  )
}
