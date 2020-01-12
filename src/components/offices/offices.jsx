import React, {useEffect} from 'react';
import { strings } from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import { Office } from "./office";
import { baseActions } from "actions"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// #############################################################################
// component
// #############################################################################

export function Offices(props){
  const classes = useStyles();
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const offices = useSelector(state => state.offices);

  // ###########################################################################
  // language constants
  // ###########################################################################

  const {
    OfficesCity,
    OfficesPhoneNumber,
    OfficesAddress,
  } = strings[language].texts;

  // ###########################################################################
  // component did mount
  // ###########################################################################

  useEffect(() => {
    dispatch(baseActions.getOffices());
  },[dispatch])

  // ###########################################################################
  // render
  // ###########################################################################
  return (
    <Grid container className={classes.root} direction="column">
      <Grid container alignItems="center" className={classes.header}>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{OfficesCity}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{OfficesPhoneNumber}</Grid>
        <Grid item xs={12} md={7} lg={7} className={classes.items}>{OfficesAddress}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}></Grid>
      </Grid>
      { offices.map(office => (
        <Office
          language={language}
          key={office.id}
          office={office}
        />
      ))}
    </Grid>
  )
  
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    marginTop: 10
  },
  items:{
    padding: '2px 5px',
    color: theme.palette.text.primary,
    fontSize: 14
  },
  header:{
    backgroundColor: theme.palette.backgrounds.tableRow,
    border: `1px solid ${theme.palette.table.borderColor}`,
    padding:"4px 0",
    borderRadius: 3,
    marginBottom: 5,
    [theme.breakpoints.down("md")]:{
      display: "none"
    }
  },
  radioButtom:{
    padding: 3
  }
}));
