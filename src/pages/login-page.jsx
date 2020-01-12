import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { LoginBackground } from "../components/responsive-backgrounds";
import { strings } from '../constants';
import { authActions } from '../actions'
import { Link } from 'react-router-dom';
// import { PhoneNumberInput } from '../components/phone-input'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// #############################################################################
// component
// #############################################################################

export default function Login (props){
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const classes = useStyles();
  const password = useFormInput("");
  const email = useFormInput("");
  const showPassword = useCheckBoxInput(false);

  // ###########################################################################
  // text string 
  
  const {
    loginPageTitle,
    loginPageInputPasswordPlaceHolder,
    loginPageInputEmailPlaceHolder,
    loginPageQuestion,
    loginPageLink,
    loginPageLoginButton,
    loginPageForgetPassword,

  } = strings[language].texts;

  // ###########################################################################

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // ###########################################################################

  const handleLogin = event => {
    event.preventDefault();
    dispatch(authActions.login({email: email.value, password: password.value}));
  }

  // ###########################################################################

  return (
    <Grid container className={classes.root}>
      <Grid item sm={6} className={classes.backgroundPicture}>
        <LoginBackground/>
      </Grid>
      <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.formContainer}>

        <Grid item xs={12} sm={10} md={8} lg={6} className={classes.formHolder} >
          <Typography color="primary" variant="h5" className={classes.title}>{loginPageTitle}</Typography>

          <Grid justify='center' container className={classes.questionHolder} >
            <Typography className={classes.question} color="primary" variant="subtitle2">{loginPageQuestion} </Typography>
            <Link className={classes.link} to="/sign-up">
              <Typography className={classes.question} color="secondary" variant="subtitle2"> {loginPageLink}</Typography>
            </Link>
          </Grid>

          <form onSubmit={handleLogin}>

            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={loginPageInputEmailPlaceHolder}
              margin="dense"
              variant="outlined"
              type="email"
              {...email}
            />
            
            <TextField
              required
              id="outlined-dense"
              label={loginPageInputPasswordPlaceHolder}
              className={`${classes.textField} ${classes.dense}`}
              margin="dense"
              variant="outlined"
              {...password}
              type={showPassword.value ? 'text' : 'password'}
              InputProps={{
                endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.iconButton}
                      aria-label="toggle password visibility"
                      {...showPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword.value ? <FontAwesomeIcon icon='eye' /> : <FontAwesomeIcon icon="eye-slash" />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Grid container className={classes.forgetPasswordText}>
              <Link className={classes.link} to="/sign-up">
                <Typography className={classes.forgetPassword} color="textSecondary" variant="caption"> {loginPageForgetPassword}</Typography>
              </Link>
            </Grid>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              aria-label="add"
              className={classes.loginbutton}
              type="submit"
            >

              {loginPageLoginButton}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

// #############################################################################
// use form input
// #############################################################################

function useFormInput(initialValue = ""){
  const [value, setValue] = useState(initialValue);
  const onChange = event => setValue(event.target.value);
  return  {value, onChange}
}

// #############################################################################
// Use Check Box Input 
// #############################################################################

function useCheckBoxInput(initialValue = false){
  const [value, setValue] = useState(initialValue);
  const onClick = () => setValue(!value);
  return  {value, onClick}
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => {
  return {
    root:{
      backgroundColor: theme.palette.backgrounds.primary,
      direction: theme.direction,
      [theme.breakpoints.down('xs')]:{
        marginTop: 50
      },
    },
    formHolder:{
      [theme.breakpoints.down('xs')]:{
        padding: 15
      },
      textAlign: "center",
    },
    phoneNumber:{
      marginBottom: 10
    },
    backgroundPicture: {
      [theme.breakpoints.down('xs')]:{
        display: 'none',
      }
    },
    backgroundPictureSecond:{
      [theme.breakpoints.up('sm')]:{
        display: 'none',
      }
    },
    formContainer:{
    },
    textField:{
      width: "100%",
    },
    backgroundImage: {
      height:"45vh"
    },
    title:{
      marginBottom: 35
    },
    questionHolder:{
      marginBottom: 20,
      flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
    },
    question:{
      paddingRight: 3,
      paddingLeft: 3,
    },
    link:{
      textDecoration:'none'
    },
    forgetPassword:{
      marginBottom: 20,
    },
    loginbutton: {
      marginTop: 15
    },
    iconButton:{
      fontSize: 14,
      padding: 5,
      width:28,
      height: 28,
    },
    forgetPasswordText:{
      justifyContent: theme.direction === "rtl" ? "flex-end" : "flex-start",
    },
    dense: {
      marginTop: theme.spacing(2),
    },
  };
});


