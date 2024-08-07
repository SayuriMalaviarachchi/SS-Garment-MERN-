import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'

export default function SendPdf() {

    const [title,setTitle] = useState("")
    const [file,setFile] = useState("")
    const [allPdf,setAllPdf] = useState("")

    useEffect(() => {
        getpdf()
    })

    const getpdf = async () => {
        const result = await axios.get("http://localhost:5000/getFile")
        console.log(result.data.data)
        setAllPdf(result.data.data)
    }

    const submitPdf = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title',title)
        formData.append('file',file)
        console.log(title,file)
   

    try{
        const result = await axios.post
        ("http://localhost:5000/uploadfile",
            formData,{
                headers:{'Content-Type': 'multipart/form-data'}
        })
        console.log(result)
        
        if(result.data.status === 200){
            alert("Upload success")
            getpdf()
        }else{
            alert("Upload error")
        }
       
    }catch (error){
        console.error("Error uploading : " + error.message)
        alert("Error uploading : ")
    }
}

  return (
    <div>
        <Nav/>
        <form>
            <label>PDF Title</label><br></br>
            <input required type = "text"></input><br></br><br></br>

            <label>Select PDF File</label><br></br>
            <input type = 'file' accept='application/pdf' required></input><br></br><br></br>

            <button>Submit</button>
        </form>

      
    </div>
  )
}
