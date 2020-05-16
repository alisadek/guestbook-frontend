import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from "./Components/Navigation/Header";
import Footer from "./Components/Navigation/Footer";
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import {AuthContext} from "./context/auth-context";
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId]= useState("");

  const login = useCallback(
    (uid) => {
      setIsLoggedIn(true);
      setUserId(uid);
    }, []);
    
    const logout = useCallback(
      () => {
        setIsLoggedIn(false);
        setUserId(null);
      },
      []
      );

      let routes;

    if(isLoggedIn){
      routes=(
        <React.Fragment>
        <Route path="/" exact>
        <Home />
      </Route>
      <Redirect to ="/" /> 
</React.Fragment>
      );
    } else{
      routes=(
        <React.Fragment>
        <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/auth">
<Auth />
</Route>
<Redirect to ="/" /> 
</React.Fragment>
      );
    }
  

return(
  <AuthContext.Provider value={{userId:userId, isLoggedIn: isLoggedIn, login:login, logout:logout}}>
  <Router>
  <Header />
  <main>
  <Switch>
 {routes}
</Switch>
  </main>
  <Footer />
</Router>
</AuthContext.Provider>
);
};

export default App;
