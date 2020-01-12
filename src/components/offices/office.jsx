import React, { useState } from 'react';
import { strings } from '../../constants';
import { OfficeForm } from "./"
import { useSelector } from "react-redux"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"

// #############################################################################
// component
// #############################################################################

export default function Office(props){
  const { office = {} } = props;
  const language = useSelector(state => state.language);
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);

  // ###########################################################################
  // component text based on the selected language
  // ###########################################################################

  const {
    transactionDetailButton
  } = strings[language].texts;

  // ###########################################################################
  // this will open the edit mode 
  // ###########################################################################

  const openEditMode = () => {
    setEditMode(true);
  }

  // ###########################################################################
  // this will close the edit mode 
  // ###########################################################################

  const closeForm = () => {
    setEditMode(false);
  }

  // ###########################################################################
  // render
  // ###########################################################################
    
    return (
      <Grid container item className={classes.root}>

        <Grid container alignItems="center" item xs={12} md={1} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{office.city}</Typography>
        </Grid>


        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" color="secondary" noWrap>{office.phoneNumber}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={7} lg={7} className={classes.items}>
          <Typography variant="inherit" noWrap>{office.address}</Typography>
        </Grid>

        <Grid container alignItems="center" justify="flex-end" item xs={12} md={1} lg={1} className={classes.items}>
            <React.Fragment>
              <Button onClick={openEditMode} variant="contained" color="primary">{transactionDetailButton}</Button>
            </React.Fragment>
        </Grid>

        {editMode && 
          <OfficeForm
            open={editMode}
            office={office}
            closeForm={closeForm}
          />
        }
        
      </Grid>
    );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    border: `1px solid #00000000`,
    borderRadius: 3,
    transition: 'background 100ms',
    "&:hover":{
      background: theme.palette.backgrounds.tableRow,
      border: `1px solid ${theme.palette.borderColor}`,
    }
  },
  deleteModal:{
    height: 45,
    position: 'absolute',
    background: '#32494EC9',
    padding: 5,
  },
  input:{
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    padding: 5,
    fontSize: 14,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.borderColor}`,
    transition: "box-shadow 150ms",
    borderRadius: 3,
    "&:focus": {
      outline: 'none',
      borderColor: theme.palette.text.secondary,
      boxShadow: '0 0 0 3px #00B3FF73'
    }
  },
  deleteInput:{
    height: "100%",
    color: "white",
    margin: "0px 5px",
    border: `1px solid #FFFFFF90 !important`, 
    width: "200px !important",
    "&::placeholder":{
      color: "#FFFFFFE0",
    }
  },
  items: {
    minHeight: 45,
    padding: 5,
    fontSize: 14,
    textTransform: "capitalize",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: theme.palette.text.secondary,
    "&:hover": {
      cursor: "default",
    },
  },
  buttonsHolder:{
    minHeight: 45,
    padding: 5,
    fontSize: 14,
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonEdit:{
    padding: 4,
    color: "#009062",
  },
  closeButton: {
    padding: 4,
    color: "red",
  },
  buttonDelete:{
    padding: 4,
    color: "red",
  },
  buttonSave:{
    margin: "0px 5px",
    height: 35,
  },
  deleteButton:{
    margin: "0px 5px",
    height: 35,
    color: "white",
    background: "#FF7800",
    "&:hover": {
      background: "#E86F02",
    }
  },
  cancelButton:{
    margin: "0px 5px",
    height: 35,
    color: "white",
    background: "#8E8E8E",
    "&:hover": {
      background: "#848484",
    }
  },
  disableButton:{
    background: "#8E8E8E",
    "&:hover": {
      background: "#848484",
    }
  },
  buttonCancel:{
    margin: "0px 5px",
    height: 35,
  },
  radioButtom:{
    padding: 3
  },
  icon: {
    padding: "0px 3px",
    transform: `rotate(${theme.direction === "ltr" ? "0deg" : "180deg"})`
  }
}));

// #############################################################################
// export the function component
// #############################################################################

export  { Office };

