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

  //Search function
  const [searchQuery , setSearchQuery] = useState("")
  const [noResults,setNoResults] = useState(false)

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
      Object.values(user).some((field) =>
      field.toString().toLowerCase().includes(searchQuery.toLowerCase())
    ))
      setUsers(filteredUsers)
      setNoResults(filteredUsers.length === 0)
    })
  }
  const handleSendReport = () => {
    //Create whatsapp chat URL
    const phoneNumber = "+940702691922"
    const message = `selected User Reports`
    const whatsAppUrl = `https://web.whatsapp.com/send?phone = ${phoneNumber}&text=${encodeURIComponent(
      message
    )}`
    //Open whatsapp chat in new window
    window.open(whatsAppUrl,"_blank")
  }

  return (

    <div>

        <Nav/>

        <h1>All Users</h1>

        <input onChange={(e) => setSearchQuery(e.target.value)}
        type = "text"
        name ="search"
        placeholder = "Search Users Here"></input>

        <button onClick={handleSearch}>Search</button>

        {noResults ? (
          <div>
            <p>No Users Found</p>
            </div>
        ) :(


        <div  ref={ComponentsRef}>

          {users && users.map((user,i) => (
            <div key = {i}>
              <UserDetails user = {user}/>

            </div>
          ))}
       
        </div>
      )}
        <button onClick={handlePrint}>Download User Details Report</button>

        <br></br>

        <button onClick={handleSendReport}>Send whatsapp message</button>


    </div>
  )
}
