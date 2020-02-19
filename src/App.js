import React from 'react'
import { Router } from "@reach/router"

import './App.css';

import Frontpage from "./components/frontpage"
import Login from "./components/login"
import Signup from "./components/signup"
import User from "./components/user"
import NotFound from "./components/notfound"

const App = () => {
  return (
    <Router>
      <Frontpage path="/" />
      <Login path="/login" />
      <Signup path="/signup" />
      <User path="/user" /> 
      <User path="/user/:userID" />
      <NotFound default />
    </Router>
  )
}

export default App