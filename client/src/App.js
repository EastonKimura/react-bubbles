import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import {PrivateRoute} from './components/PrivateRoute';
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Explain what a token is used for.
//used to protect something and acts like an electronic key
//- [ ] What steps can you take in your web apps to keep your data secure?
//back up your data, scan for vulnerabilities, keep everything up to date and ask people to test it
//- [ ] Describe how web servers work.
//processes incoming netowrk requests over HTTP and several other related protocols.
//- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
//POST, GET, PUT, PATCH, DELETE. they create, read, update/replace, update/modify, and delete.

