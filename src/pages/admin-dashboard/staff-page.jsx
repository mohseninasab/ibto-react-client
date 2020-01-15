import React from 'react';
import { Staffs } from "../../components/staffs";
import { makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid"

// #############################################################################
// component
// #############################################################################

export default function StaffPage(props){
  const classes = useStyles();

  // ###########################################################################
  // render
  // ###########################################################################
  return (
    <Card classes={{root: classes.root}}>
      <Grid container justify="flex-end">
        <Staffs/>
      </Grid>
    </Card>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{ padding: 10 }
}));

// #############################################################################
// export
// #############################################################################

export  { StaffPage };

