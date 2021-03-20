import React from 'react';
import styles from './Login.scss';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <Paper className={styles.component}>
        <form className={styles.login_form}>
          <TextField
            id="outlined-basic"
            label="Login"
            variant="outlined"
            className={styles.input}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            className={styles.input}
          />
        </form>
        <div className={styles.button_box}>
          <Button
            className={styles.login_button}
            color="primary"
            variant="contained">Sign In </Button>
          <Button
            className={styles.login_button}
            color="primary"
            variant="contained">Register </Button>
        </div>
        <div className={styles.home_box}>
          <Button
            className={styles.home_button}
            color="primary"
            variant="contained"
            component={NavLink} to={`${process.env.PUBLIC_URL}/`}>Back to Homepage </Button>
        </div>
      </Paper>
    );
  }
}

export default Login;
