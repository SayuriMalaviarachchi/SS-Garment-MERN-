import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AddUser.module.css';// Import the CSS module

export default function SignUp() {
  const history = useNavigate();

  const [inputs, setUser] = useState({
    name: "",
    password: "",
    gmail: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history('/mainhome'));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      name: String(inputs.name),
      password: String(inputs.password),
      gmail: String(inputs.gmail),
      phone: Number(inputs.phone),
      address: String(inputs.address),
    }).then(res => res.data);
  };

  return (
    <div className={styles.container}> {/* Apply container class */}
      <Nav />
      <h1>Add user</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} value={inputs.name} required />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} value={inputs.password} required />
        <label>Gmail</label>
        <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />
        <label>Phone</label>
        <input type="tel" name="phone" onChange={handleChange} value={inputs.phone} required />
        <label>Address</label>
        <input type="text" name="address" onChange={handleChange} value={inputs.address} required />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
