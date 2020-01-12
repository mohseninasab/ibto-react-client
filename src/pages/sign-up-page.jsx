import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Person, Company } from "../components/icons";
import { Link } from 'react-router-dom';
import { CheckBoxCustome } from '../components/check-box-custom';

import { SignUpBackground } from "../components/responsive-backgrounds";
import { strings } from '../constants';
// import { PhoneNumberInput } from '../components/phone-input';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// #############################################################################
// component
// #############################################################################

export default function SignUp(props){
  const classes = useStyles();
  const language = useSelector(state => state.language);
  const email = useFormInput("");
  const password = useFormInput();
  const showPassword = useCheckBoxInput(false);
  const [accountType, setType] = useState({
    person: true,
    company: false,
  }) 

  // ###[ language strings ]####################################################

  const {
    signUpPageTitle,
    signUpSubtitle,
    signUpPageQuestion,
    signUpPageLink,
    signUpPagePersonalCheckBoxLabel,
    signUpPageCompanyCheckBoxLabel,
    signUpPageInputEmailPlaceHolder,
    loginPageInputPasswordPlaceHolder,
    signUpPageSignUpButton,
  } = strings[language].texts;


  // ###########################################################################

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // ###########################################################################

  const handleSignUP = () => {
    console.log(password.value, email.value);
  }

  const handleAccountType = (event) => {
    const {name} = event.target;
    if(name === 'person') setType({...accountType, person: true, company: false})
    else setType({...accountType, person: false, company: true})
  }

  // ###########################################################################
  
  return (
    <Grid container className={classes.root}>
      <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.backgroundPicture}>
        <SignUpBackground/>
      </Grid>
      <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.formContainer}>
        <Grid item xs={12} sm={10} md={8} lg={6} className={classes.formHolder} >
          <Typography color="primary" variant="h5" className={classes.title}>{signUpPageTitle}</Typography>
          <Typography color="textPrimary" variant="subtitle1" className={classes.title}>{signUpSubtitle}</Typography>
          <Grid justify='center' container className={classes.questionHolder} >
            <Typography className={classes.question} color="primary" variant="subtitle2">{signUpPageQuestion} </Typography>
            <Link className={classes.link} to="/login">
              <Typography className={classes.question} color="secondary" variant="subtitle2"> {signUpPageLink}</Typography>
            </Link>
          </Grid>

          <Grid container spacing={1} className={classes.checkBoxHolder} >
            <Grid item xs={6}>
              <CheckBoxCustome
                name="company"
                onChange={handleAccountType}
                checked={accountType.company}
                label={signUpPageCompanyCheckBoxLabel}
              >
                <Company/>
              </CheckBoxCustome>
            </Grid>

            <Grid item xs={6}>
              <CheckBoxCustome
                name="person"
                onChange={handleAccountType}
                checked={accountType.person}
                label={signUpPagePersonalCheckBoxLabel}
              >
                <Person/>
              </CheckBoxCustome>
            </Grid>
          </Grid>

          <TextField
            required
            className={`${classes.textField} ${classes.dense}`}
            label={signUpPageInputEmailPlaceHolder}
            margin="dense"
            variant="outlined"
            type="email"
            {...email}
          />

          <TextField
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

          <Button
            variant="outlined"
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.loginbutton}
            onClick={handleSignUP}
          >
          {signUpPageSignUpButton}
        </Button>
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
  console.log(theme);
  return {
  root:{
  direction: theme.direction,
    [theme.breakpoints.down('xs')]:{
      marginTop: 50
    },
  },
  backgroundPicture: {
    [theme.breakpoints.down('xs')]:{
      display: 'none',
    }
  },
  formHolder:{
    [theme.breakpoints.down('xs')]:{
      padding: 15
    },
    textAlign: "center",
  },
  title:{
    marginBottom: 10
  },
  phoneNumber:{
    marginTop: 15,
    marginBottom: 15
  },
  textField:{
      width: "100%",
      direction: 'ltr',
      marginTop: 15
  },
  questionHolder: {
    marginBottom: 15,
    flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
  },
  question: {
    paddingRight: 3,
    paddingLeft: 3,
  },
  link: {
    textDecoration:'none'
  },
  checkBoxHolder: {
    marginTop: 10,
  },
  iconButton: {
    fontSize: 14,
    padding: 5,
    width:28,
    height: 28,
  },
  loginbutton: {
      marginTop: 15
  },
}});
