import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from "./Components/Navigation/Header";
import Footer from "./Components/Navigation/Footer";

import Home from './Pages/Home';
import Auth from './Pages/Auth';
import './App.css';


function App() {
  

return(
  <Router>
  <Header />
  <main>
  <Switch>
  <Route path="/" exact>
  <Home />
</Route>
<Route path="/login">
<Auth />
</Route>
{/* <Redirect to ="/" /> */}
</Switch>
  </main>
  <Footer />
</Router>
);
};

export default App;
