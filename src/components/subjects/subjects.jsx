import React, {useEffect} from 'react';
import { strings } from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import { Subject } from "./subject";
import { baseActions } from "actions"
import { useFormInput } from "common-component-methods"
import TextField from "@material-ui/core/TextField"
import { SubjectAddForm } from "./"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// #############################################################################
// component
// #############################################################################

export function Subjects(props){
  const classes = useStyles();
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.subjects);
  const searchQuery = useFormInput("");

  // ###########################################################################
  // language constants
  // ###########################################################################

  const {
    SubjectId,
    SubjectName,
    SubjectBloodType,
    SubjectPhoneNumber,
    SubjectNationalCode,
    SubjectAddress,
  } = strings[language].texts;

  // ###########################################################################
  // component did mount
  // ###########################################################################

  useEffect(() => {
    dispatch(baseActions.getSubjects());
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


  const filteredSubjects = filterArray(subjects, ["firstName", "lastName", "city", "bloodType", "nationalCode", "address"], searchQuery.value);

  // ###########################################################################
  // render
  // ###########################################################################

  return (
    <Grid container className={classes.root} direction="column">

      <TextField
        required
        classes={{root: classes.textField}}
        label={"Search"}
        margin="dense"
        variant="outlined"
        type="text"
        {...searchQuery}
      />
      
      <Grid container alignItems="center" className={classes.header}>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{SubjectId}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{SubjectName}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}>{SubjectBloodType}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{SubjectPhoneNumber}</Grid>
        <Grid item xs={12} md={2} lg={2} className={classes.items}>{SubjectNationalCode}</Grid>
        <Grid item xs={12} md={3} lg={3} className={classes.items}>{SubjectAddress}</Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.items}></Grid>
      </Grid>

      <Grid className={classes.rowsContainer}>
        { filteredSubjects.map(subject => (
          <Subject
            language={language}
            key={subject.id}
            subject={subject}
          />
        ))}
      </Grid>
      <SubjectAddForm/>
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
    height: "calc(100vh - 245px)"
  }
}));
