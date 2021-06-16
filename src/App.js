//  This was just me exploring a bit with text fields and theming them -- feeling my way around material ui without templates.

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     margin: theme.spacing(1),
//     width: '25ch'
//   },
// }));

// export default function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Name" />
//       <TextField id="filled-basic" label="Age" variant="filled" />
//       <TextField id="outlined-basic" label="Occupation" variant="outlined" />
//       <Button className={classes.root}>Submit</Button>
//     </form>

//   );
// }

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