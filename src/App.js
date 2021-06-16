import { AuthCheck, useAuth } from 'reactfire';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import "./App.css";



function App() {
  const auth = useAuth();
  return(
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCheck fallback= {<Login />} auth={auth}>
        <Route exact path="/" component={Home} />
      </AuthCheck>
    </Suspense>
    </Router>
  )
}

export default App;