import React, { useEffect } from 'react';
import { baseActions } from "../../actions"
 import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';

// #############################################################################
// component
// #############################################################################

export default function UsersPage(props){
  const dispatch = useDispatch();
  const classes = useStyles();

  // ###########################################################################
  // component did mount
  // ###########################################################################
  
  useEffect(() => {
    dispatch(baseActions.getUsers());
  },[dispatch]);

  // ###########################################################################
  // render
  // ###########################################################################
    
    return (
      <Card classes={{root: classes.root}}>
      </Card>
    );
}

// #############################################################################
// styles
// #############################################################################

const useStyles =  makeStyles(theme => ({
  root:{
    padding: 10
  }
}));

// #############################################################################
// export
// #############################################################################

export  { UsersPage };

