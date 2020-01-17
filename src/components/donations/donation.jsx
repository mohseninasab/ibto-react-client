import React, { useState } from 'react';
import { strings } from '../../constants';
import { DonationForm } from "./"
import { useSelector } from "react-redux"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"

// #############################################################################
// component
// #############################################################################

export default function Donation(props){
  const { staff = {} } = props;
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

        <Grid container alignItems="center" item xs={12} md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="primary" noWrap>{staff.id}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12} md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{`${staff.firstName} ${staff.lastName}`}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="secondary" noWrap>{staff.employeeNumber}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{staff.officeName}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" color="secondary" noWrap>{staff.phoneNumber}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="primary" noWrap>{staff.role}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{`${staff.city} - ${staff.address}`}</Typography>
        </Grid>

        <Grid container alignItems="center" justify="flex-end" item xs={12} md={1} lg={1} className={classes.items}>
            <React.Fragment>
              <Button onClick={openEditMode} variant="contained" color="primary">{transactionDetailButton}</Button>
            </React.Fragment>
        </Grid>

        {editMode && 
          <DonationForm
            open={editMode}
            staff={staff}
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
    transition: 'background 50ms',
    height: "fit-content",
    "&:hover":{
      background: theme.palette.backgrounds.tableRow,
      border: `1px solid ${theme.palette.borderColor}`,
    }
  },
  items: {
    minHeight: 41,
    padding: "2px 5px",
    fontSize: "0.9rem",
    textTransform: "capitalize",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: theme.palette.text.secondary,
    "&:hover": {
      cursor: "default",
    },
  }
}));

// #############################################################################
// export the function component
// #############################################################################

export  { Donation };

