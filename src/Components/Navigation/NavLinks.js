import React, { useContext } from "react";
import {NavLink} from "react-router-dom";

import {AuthContext} from "../../context/auth-context";
import "./NavLinks.css";

function NavLinks(props) {
    const auth = useContext (AuthContext);
  return (
    <ul className= "nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {!auth.isLoggedIn&&(
      <li>
        <NavLink to="/auth">Signup/Login</NavLink>
      </li>)}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {auth.isLoggedIn&&(
      <li>
      <button className= "btn" onClick = {auth.logout}>Logout</button>
      </li>
      )}    
    </ul>
  );
}

export default NavLinks;
