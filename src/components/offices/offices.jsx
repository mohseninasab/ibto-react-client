import React, {useEffect} from 'react';
import { strings } from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import { Office } from "./office";
import { baseActions } from "actions"
import { useFormInput } from "common-component-methods"
import TextField from "@material-ui/core/TextField"
import { OfficeAddForm } from "./"

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
  const searchQuery = useFormInput("");

  // ###########################################################################
  // language constants
  // ###########################################################################

  const {
    OfficesId,
    OfficesName,
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
  // filter array
  // ###########################################################################

  const filterArray = (array, keys = [], searchQuery = "") => {
    return array.filter(item => {
      let result = false;
      keys.forEach(key => {
        result =
          item[key].toString().toLowerCase().includes(searchQuery.toLowerCase()) || result;
      });
      return result;
    });
  };

  // ###########################################################################
  // filtered array
  // ###########################################################################


  const filteredOffices = filterArray(offices, ["city", "address", "phoneNumber"], searchQuery.value);

  // ###########################################################################
  // render
  // ###########################################################################

  return (
    <Grid container className={classes.root} direction="column">

      <Grid spacing={1} container>
        <Grid item xs={12} md={10}>
          <TextField
            required
            classes={{root: classes.textField}}
            label={"Search"}
            margin="dense"
            variant="outlined"
            type="text"
            {...searchQuery}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <OfficeAddForm/>
        </Grid>
      </Grid>
      
      <Grid container alignItems="center" className={classes.header}>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{OfficesId}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{OfficesName}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{OfficesPhoneNumber}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{OfficesCity}</Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.items}>{OfficesAddress}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}></Grid>
      </Grid>

      <Grid className={classes.rowsContainer}>
        { filteredOffices.map(office => (
          <Office
            language={language}
            key={office.id}
            office={office}
          />
        ))}
      </Grid>
      
    </Grid>
  )
  
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{},
  items:{
    padding: '2px 5px',
    color: theme.palette.text.primary,
    fontSize: 14
  },
  header:{
    backgroundColor: theme.palette.backgrounds.tableRow,
    border: `2px solid ${theme.palette.table.borderColor}`,
    padding:"4px 0",
    borderRadius: 3,
    marginBottom: 5,
    [theme.breakpoints.down("md")]:{
      display: "none"
    }
  },
  textField:{
    margin: "5px 0px"
  },
  radioButtom:{
    padding: 3
  },
  rowsContainer:{
    width: "100%",
    overflow: "auto",
    height: "calc(100vh - 200px)"
  }
}));
