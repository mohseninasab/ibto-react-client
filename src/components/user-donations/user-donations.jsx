import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { baseActions } from "actions"
import { useFormInput, filterArray } from "common-component-methods"
import { UserDonation } from "./"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// #############################################################################
// component
// #############################################################################

export function UserDonations(props){
  const classes = useStyles();
  const dispatch = useDispatch();
  const { donorNationalCode = undefined} = useParams();
  const language = useSelector(state => state.language);
  const donations = useSelector(state => state.userDonations);
  const searchQuery = useFormInput("");

  // ###########################################################################
  // component did mount
  // ###########################################################################

  useEffect(() => {
    dispatch(baseActions.getUserDonations({donorNationalCode}));
  },[dispatch, donorNationalCode])

  // ###########################################################################
  // filtered array
  // ###########################################################################

  const filteredDonations = filterArray(donations, ["id", "serial", "donorFirstName", "donorLastName", "donorNationalCode", "patientFirstName", "patientLastName", "patientNationalCode", "examinerEmployeeNumber", "phlebotomistEmployeeNumber"], searchQuery.value);

  // ###########################################################################
  // render
  // ###########################################################################

  return (
    <Grid className={classes.rowsContainer}>
      { filteredDonations.map(donation => (
        <UserDonation
          language={language}
          key={donation.id}
          donation={donation}
        />
      ))}
    </Grid>
  )
  
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  rowsContainer:{
    width: "100%",
    overflow: "auto",
    height: "calc(100vh - 90px)"
  }
}));
