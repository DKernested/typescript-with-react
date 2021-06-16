import { AuthCheck, useAuth } from "reactfire";
import React, { Suspense } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "firebase/firestore";
import preloadAuth from "firebase"

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: theme.spacing(1),
    width: '25ch'
  },
}));

function Home() {
      const classes = useStyles();
      const auth = useAuth();
      return (
        <div style={{padding: 20 }}>
            <h1> Congrats {auth.currentUser.email} </h1>
      <button className={classes.root} onClick={async () => await auth.signOut()} style={{ margin: 12 }}>
        LOGOUT
      </button>
        </div>
    );
  }

export default Home;