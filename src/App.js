import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";


import Footer from "./Components/Navigation/Footer";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { AuthContext } from "./context/auth-context";
import "./App.css";
import { useAuth } from "./Hooks/auth-hook";
import MainNavigation from "./Components/Navigation/MainNavigation";


function App() {
  const { token, login, logout,userId, userName} = useAuth();
  
  let routes;

  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        userName: userName,
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch>{routes}</Switch>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
