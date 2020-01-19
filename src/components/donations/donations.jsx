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
  const donations = useSelector(state => state.donations);
  const searchQuery = useFormInput("");

  // ###########################################################################
  // language constants
  // ###########################################################################

  const {
    DonationsId,
    DonationsBloodType,
    DonationsDonor,
    DonationsOffice,
    DonationsDate,
    DonationsExpDate,
    DonationsExaminer,
    DonationsPhlebotomist,
  } = strings[language].texts;

  // ###########################################################################
  // component did mount
  // ###########################################################################

  useEffect(() => {
    dispatch(baseActions.getStaff());
    dispatch(baseActions.getSubjects());
    dispatch(baseActions.getDonations());
    dispatch(baseActions.getOffices());
  },[dispatch])

  // ###########################################################################
  // filtered array
  // ###########################################################################

  const filteredDonations = filterArray(donations, ["id", "serial", "donorFirstName", "donorLastName", "donorNationalCode", "patientFirstName", "patientLastName", "patientNationalCode", "examinerEmployeeNumber", "phlebotomistEmployeeNumber"], searchQuery.value);

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
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{DonationsId}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{DonationsBloodType}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{DonationsDonor}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{DonationsOffice}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{DonationsDate}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{DonationsExpDate}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{DonationsExaminer}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{DonationsPhlebotomist}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}/>
      </Grid>

      <Grid className={classes.rowsContainer}>
        { filteredDonations.map(donation => (
          <Donation
            language={language}
            key={donation.id}
            donation={donation}
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
    fontSize: "0.8rem"
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
    height: "calc(100vh - 198px)"
  }
}));
