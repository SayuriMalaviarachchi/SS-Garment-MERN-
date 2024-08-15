import React, { useRef } from 'react'
import Nav from "../Nav/Nav"
import emailjs from '@emailjs/browser';
import styles from './ContactUs.module.css';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_eqo0mio', 'template_u3flpo2', form.current, {
          publicKey: 'BvkxGyrRKiViaDJQm',
        })
        .then(
          (result) => {
            console.log(result.text);
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
            <Nav />
            <div className={styles.container}>
                <h1 className={styles.heading}>Contact Us</h1>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <label className={styles.label}>Name</label>
                    <input type="text" name="user_name" className={styles.input} />
                    <label className={styles.label}>Email</label>
                    <input type="email" name="user_email" className={styles.input} />
                    <label className={styles.label}>Message</label>
                    <textarea name="message" className={styles.textarea} />
                    <input type="submit" value="Send" className={styles.submit} />
                </form>
            </div>
        </div>
  )
}
