import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import consts from '../consts'
import { LoginContext } from './LoginContext'
import jwt from 'jsonwebtoken'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { writeToken } = useContext(LoginContext)

  const onClick = () => {

    // send the email and password
    // to the login api and expect
    // a token in return if successful
    // or an empty string if not
    fetch(`${consts.uriBase}${consts.authRoute}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(httpResponse => {
        if (!httpResponse.ok) {
          throw new Error("Login Failed")
        }

        return httpResponse.json()
      })
      .then(token => {

        //if we get a token back
        if (token !== "") {

          // store the token in local storage
          writeToken(token)
        } else {

          //let the user know that the
          //password/email combo was not valid
          alert("Incorrect email and password!")
        }

        //clear state
        setEmail('')
        setPassword('')

        //move the user to the admin page
        props.history.push('/admin')

      })
  }

  const onGuestClick = () => {

    // Give the user a dummy token
    // that will allow the user to see

    let guestToken = jwt.sign({user: 'guest'}, 'key', {expiresIn: '1h'})

    writeToken(guestToken)

    props.history.push('/admin')
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={`${classes.paper}`}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            fullWidth
            id="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onClick}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            id="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={onGuestClick}
          >
            Explore the site as a guest
          </Button>
        </div>
      </Container>
    </div>
  );
}