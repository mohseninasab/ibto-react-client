import React from 'react';
import { Subjects } from "../../components/subjects";
import { makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid"

// #############################################################################
// component
// #############################################################################

export default function SubjectsPage(props){
  const classes = useStyles();

  // ###########################################################################
  // render
  // ###########################################################################
  return (
    <Card classes={{root: classes.root}}>
      <Grid container justify="flex-end">
        <Subjects/>
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

export  { SubjectsPage };

