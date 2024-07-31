import React, { useRef } from 'react'
import Nav from "../Nav/Nav"
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_eqo0mio', 'template_u3flpo2', form.current, {
          publicKey: 'BvkxGyrRKiViaDJQm',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Success')
         
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Please re-send')
          },
        );
    }
  return (
    <div>
        <Nav/>
        <h1>Contact Us page</h1>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label><br></br>
        <input type="text" name="user_name" /><br></br><br></br>
        <label>Email</label><br></br>
        <input type="email" name="user_email" /><br></br><br></br>
        <label>Message</label><br></br>
        <textarea name="message" /><br></br>
        <input type="submit" value="Send" />
        </form>
      
    </div>
  )
}
