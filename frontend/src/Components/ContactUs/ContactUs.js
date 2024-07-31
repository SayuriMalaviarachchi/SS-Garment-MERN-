import React from 'react'
import Nav from "../Nav/Nav"

export default function ContactUs() {
  return (
    <div>
        <Nav/>
        <h1>Contact Us page</h1>
        <form>
          <label>Name</label>
          <br></br>
          <input type = "text"></input><br></br><br></br>

          <label>Gmail</label>
          <br></br>
          <input type = "email"></input><br></br><br></br>

          <label>Message</label>
          <br></br>
          <textarea type = "text"></textarea><br></br><br></br>

          <button>Send</button>
        
        </form>
      
    </div>
  )
}
