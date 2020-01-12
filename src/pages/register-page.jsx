import React from 'react';
import { useSelector } from "react-redux";

import { SignUpBackground } from "../components/responsive-backgrounds"
import { strings } from '../constants';
import { MobileSMS } from "../components/icons";
import { PhoneNumberInput } from '../components/phone-input';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// #############################################################################
// component
// #############################################################################

export default function Register(props){
  const classes = useStyles();
  const language = useSelector(state => state.language)

  // ###[ language strings ]####################################################
  const {
    signUpPageTitle,
    signUpSubtitle,
    signUpSMSHelper,
  } = strings[language].texts;

  // ###########################################################################

  const handleChange = (isValid, number, country) => {
    console.log({isValid, number, country})
  };

  // ###########################################################################
  
  return (
    <Grid container className={classes.root}>
      <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.backgroundPicture}>
        <SignUpBackground/>
      </Grid>
      <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.formContainer}>
        <Grid item xs={12} sm={10} md={8} lg={6} className={classes.formHolder} >
          <Typography color="primary" variant="h5" className={classes.title}>{signUpPageTitle}</Typography>
          <Typography color="textPrimary" variant="h6" className={classes.title}>{signUpSubtitle}</Typography>
          <MobileSMS />
          <PhoneNumberInput classes={{root: classes.phoneNumber}} type="number" onChange={handleChange}/>
          <Typography color="textSecondary" variant="subtitle1" className={classes.title}>{signUpSMSHelper}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

// #############################################################################
// styles 
// #############################################################################

const useStyles = makeStyles(theme => ({
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
    marginBottom: 20
  },
  phoneNumber:{
    marginTop: 15,
    marginBottom: 15
  }
}));
