import React from "react";
import './nav.css'
import {Link} from "react-router-dom"

export default function Nav() {
   
  return (
    <div>
     <ul className=" home-ul">

        <li className=" home-ll"></li>
        <Link to="/mainhome" className="active home-a">
          <h1>Home</h1>
          </Link>

        <li className=" home-ll"></li>
        <Link to="/allUsers" className="active home-a">
         <h1>All Users</h1>
         </Link>

        <li className=" home-ll"></li>
        <Link to="/About Us" className="active home-a">
        <h1>About Us</h1>
        </Link>

        <li className=" home-ll"></li>
        <Link to="/addUser" className="active home-a">
        <h1>Add User</h1>
        </Link>

        <li className=" home-ll"></li>
        <Link to="/Sign Up" className="active home-a">
        <button>Sign Up</button>
        </Link>

        <li className=" home-ll"></li>
        <Link to="/log Up" className="active home-a">
        <button>Login</button>
        </Link>


       
      </ul>
    </div>
  )}
   
