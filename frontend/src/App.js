import React from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home"
import Users from './Components/AllUsers/Users';
import AboutUs from './Components/About Us/AboutUs';
import SignUp from './Components/SignUp/SignUp';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import AddUser from './Components/AddUser/AddUser'
import Login from './Components/Login/Login'
import User from './Components/User/UserDetails';

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/mainhome" element = {<Home/>}/>
          <Route path ="/allUsers" element = {<Users/>}/>   
          <Route path ="/About us" element = {<AboutUs/>}/>
          <Route path ="/Sign Up" element = {<SignUp/>}/>
          <Route path ="/log up" element = {<Login/>}/>
         < Route path ="/addUser" element = {<AddUser/>}/>
          <Route path ="/allUsers/:id" element = {<UpdateUser/>}/>  



        </Routes>
      </React.Fragment>
     
    </div>
  );
}

export default App
