import React, {useEffect} from 'react';
import { strings } from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import { baseActions } from "actions"
import { useFormInput, filterArray } from "common-component-methods"
import TextField from "@material-ui/core/TextField"
import { DonationAddForm, Donation } from "./"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// #############################################################################
// component
// #############################################################################

export function Donations(props){
  const classes = useStyles();
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const staff = useSelector(state => state.staff);
  const searchQuery = useFormInput("");

  // ###########################################################################
  // language constants
  // ###########################################################################

  const {
    StaffId,
    StaffName,
    StaffRole,
    StaffNumber,
    StaffOffice,
    StaffPhoneNumber,
    StaffAddress,
  } = strings[language].texts;

  // ###########################################################################
  // component did mount
  // ###########################################################################

  useEffect(() => {
    dispatch(baseActions.getStaff());
    dispatch(baseActions.getDonations());
    dispatch(baseActions.getOffices());
  },[dispatch])

  // ###########################################################################
  // filtered array
  // ###########################################################################

  const filteredStaff = filterArray(staff, ["firstName", "lastName", "city", "address", "employeeNumber", "role"], searchQuery.value);

  // ###########################################################################
  // render
  // ###########################################################################

  return (
    <Grid container className={classes.root} direction="column">
      <Grid spacing={1}  container>
        <Grid item xs={12} md={10}>
          <TextField
            classes={{root: classes.textField}}
            label={"Search"}
            margin="dense"
            variant="outlined"
            type="text"
            {...searchQuery}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <DonationAddForm/>
        </Grid>
      </Grid>
      
      <Grid container alignItems="center" className={classes.header}>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{StaffId}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{StaffName}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{StaffNumber}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{StaffOffice}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{StaffPhoneNumber}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{StaffRole}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{StaffAddress}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}></Grid>
      </Grid>

      <Grid className={classes.rowsContainer}>
        { filteredStaff.map(staff => (
          <Donation
            language={language}
            key={staff.id}
            staff={staff}
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
    height: "calc(100vh - 210px)"
  }
}));
