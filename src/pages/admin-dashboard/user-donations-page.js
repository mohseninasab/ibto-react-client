import React from 'react';
import { UserDonations } from "../../components/user-donations";
import Grid from "@material-ui/core/Grid"

// #############################################################################
// component
// #############################################################################

export default function UserDonationsPage(props){
  return (
      <Grid container justify="flex-end">
        <UserDonations/>
      </Grid>
  );
}

// #############################################################################
// export
// #############################################################################

export  { UserDonationsPage };

