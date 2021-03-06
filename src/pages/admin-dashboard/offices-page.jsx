import React from 'react';
import { Offices } from "../../components/offices";
import { makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid"

// #############################################################################
// component
// #############################################################################

export default function OfficesPage(props){
  const classes = useStyles();

  // ###########################################################################
  // render
  // ###########################################################################
  return (
    <Card classes={{root: classes.root}}>
      <Grid container justify="flex-end">
        <Offices/>
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

export  { OfficesPage };

