import React, { useState, useContext } from "react";

import Input from "../Components/FormElements/Input";
import Card from "../Components/UIElements/Card";
import {AuthContext} from "../context/auth-context"
import "./Auth.css";

function Auth(props) {
    const auth= useContext (AuthContext);
  const [contact, setContact] = useState({ email: "", password: "", name:"" });
  const [isLoginMode, setIsLoginMode] = useState(true);
  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
        return ({
            ...prevValue,
            [name]: value
        });
    });
  }

  function switchModeHandler(event){
    setIsLoginMode(prevMode => !prevMode);
    setContact({email: "", password: "", name:""});
  };

  function submitContact(event) {
      event.preventDefault();
    console.log(contact);
    auth.login();
  }

  return (
    <Card className="authentication">
      <form>
      <h1> {!isLoginMode?"SIGNUP":"LOGIN"}</h1>
        {!isLoginMode &&    
          
            <Input
            className="login"
            name="name"
            type="text"
            element="input"
            id="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={contact.name}
            label="Name" />}
          <Input
            className="login"
            name="email"
            type="text"
            element="input"
            id="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
            value={contact.email}
            label="Email"
          />
          <Input
            onChange={handleChange}
            element="input"
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={contact.password}
            label="Password"
          />
          <button onClick={submitContact}>{isLoginMode?"LOGIN":"SIGNUP"}</button>

      </form>
    <button className="ghost" onClick={switchModeHandler}>SWITCH TO {isLoginMode?"SIGNUP":"LOGIN"}</button> 
    </Card>
  );
}

export default Auth;
