import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'

export default function UpdateUser() {
    
    const [inputs,setInputs] = useState({})
    const history = useNavigate()
    const id = useParams().id // this name should be same in app.js(.id)

    useEffect(() =>{

        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:5000/users/${id}`)
            .then((res) => res.data)
            .then((data) => setInputs(data.user))
        }
        fetchHandler()
    },[id])

    //to insert updated data to DB
    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/users/${id}`,{
        name:String(inputs.name),
        gmail:String(inputs.gmail),
        phone:Number(inputs.phone),
        address:String(inputs.address),
    })
        .then((res) => res.data)
    }

    
  const handleChange =(e) =>{
    setInputs ((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit =(e) =>{//redirecting page
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=> history("/allUsers"))
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
