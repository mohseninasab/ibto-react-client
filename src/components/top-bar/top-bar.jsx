import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../../actions'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

import ExitToAppIcon from "@material-ui/icons/ExitToApp";


// #############################################################################
// component
// #############################################################################

export function TopBar(props){
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  // ###########################################################################
  //
  // ###########################################################################

  useEffect(() => {
    if(!user.firstName) dispatch(authActions.whoAmI());
  },[dispatch, user]);

  // ###########################################################################
  //
  // ###########################################################################

  const handleLogout = () => {
    dispatch(authActions.logout());
  }

  // ###########################################################################
  //
  // ###########################################################################
  
  return (
    <Grid container justify="space-between" alignItems="center" className={classes.root} >
      <Hidden smDown>
        <Typography varient="subtitle1" color="secondary">
          <span className={classes.spans}>{user.firstName}</span>
          <span className={classes.spans}>{user.lastName}</span>
        </Typography>
      </Hidden>
      <Grid className={classes.tools}>

        <IconButton className={classes.bellButton} onClick={handleLogout}>
          <ExitToAppIcon/>
        </IconButton>

      </Grid>
    </Grid>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    [theme.breakpoints.down('xs')]:{
      justifyContent: 'flex-end !important',
    },
  },
  spans: {
    paddingRight: 3,
    paddingLeft: 3
  },
  avatar: {
    margin: 10,
    transition: "box-shadow 150ms",
    '&:hover':{
      boxShadow: "inset 0 0 0 1px #FF008D",
      cursor: "pointer"
    }
  },
  tools:{
    display: 'flex',
    alignItems: 'center',
    direction: 'rtl',
  },
  bellButton:{
    fontSize: 18,
    padding: 4,
  },
  textField:{
    paddingRight: 5,
    paddingLeft: 5
  },
  icon:{
    fontSize: 40
  }
}));