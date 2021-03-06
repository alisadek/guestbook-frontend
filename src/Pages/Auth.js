import React, { useState, useContext } from "react";

import Input from "../Components/FormElements/Input";
import Card from "../Components/UIElements/Card";
import { AuthContext } from "../context/auth-context";
import ErrorModal from "../Components/UIElements/ErrorModal";
import { useHttpClient } from "../Hooks/http-hook";
import Button from "../Components/FormElements/Button";
import "./Auth.css";

function Auth() {
  const auth = useContext(AuthContext);
  const {error,sendRequest, clearError} = useHttpClient();
  const [contact, setContact] = useState({ email: "", password: "", name: "" });
  const [isLoginMode, setIsLoginMode] = useState(true);
  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function switchModeHandler(event) {
    setIsLoginMode((prevMode) => !prevMode);
    setContact({ email: "", password: "", name: "" });
  }

  async function submitContact(event) {
    event.preventDefault();

    if (isLoginMode) {
      try{
         const responseData = await sendRequest("http://localhost:5000/api/login","POST", JSON.stringify({
          email: contact.email,
          password: contact.password
        }), { 
            "Content-Type": "application/json" 
          }
         
         );
        
         auth.login(responseData.userId, responseData.token, responseData.name);
         console.log(auth.userName);
        } catch(err){}
      }else {
      try {
        const responseData = await sendRequest("http://localhost:5000/api/signup", "POST",JSON.stringify({
          name: contact.name,
          email: contact.email,
          password: contact.password,
        }), { "Content-Type": "application/json" }
             
        );
       
        auth.login(responseData.userId, responseData.token, responseData.name);
      }catch (err){} 
    }
  };

  return (
    <React.Fragment>
      <ErrorModal  error={error} onClear={clearError} />
      <Card className="authentication">
        <form>
          <h1> {!isLoginMode ? "SIGNUP" : "LOGIN"}</h1>
          {!isLoginMode && (
            <Input
              className="login"
              name="name"
              type="text"
              element="input"
              id="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={contact.name}
              label="Name"
            />
          )}
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
          <Button  onClick={submitContact}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </React.Fragment>
  );
}

export default Auth;
