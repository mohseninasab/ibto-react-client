import React, { useState } from 'react';
import { strings } from '../../constants';
import { DonationForm } from "./"
import { useSelector } from "react-redux"
import { parseDate } from "common-component-methods"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"

// #############################################################################
// component
// #############################################################################

export default function Donation(props){
  const { donation = {} } = props;
  const language = useSelector(state => state.language);
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);

  // ###########################################################################
  // component text based on the selected language
  // ###########################################################################

  const {
    transactionDetailButton,
    DonationsMoreButton,
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
      <Grid container item className={`${classes.root} ${donation.usable === 1 ? classes.usable : donation.usable === 0 ? classes.unusable : classes.noValicate  }`}>

        <Grid container alignItems="center" item xs={12} md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="primary" noWrap>{donation.id}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="secondary" noWrap>{donation.bloodType}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12} md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{`${donation.donorFirstName} ${donation.donorLastName}`}</Typography>
        </Grid>
        

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{donation.donationOfficeName}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="primary" noWrap>{parseDate(donation.date)}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="secondary" noWrap>{parseDate(donation.expDate)}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" noWrap>{donation.examinerEmployeeNumber}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" noWrap>{donation.phlebotomistEmployeeNumber}</Typography>
        </Grid>

        <Grid container alignItems="center" justify="flex-end" item xs={12} md={1} lg={1} className={classes.items}>
            <React.Fragment>
              <Button onClick={openEditMode} variant="outlined" color="secondary">{DonationsMoreButton}</Button>
            </React.Fragment>
        </Grid>

        <Grid container alignItems="center" justify="flex-end" item xs={12} md={1} lg={1} className={classes.items}>
            <React.Fragment>
              <Button onClick={openEditMode} variant="contained" color="primary">{transactionDetailButton}</Button>
            </React.Fragment>
        </Grid>

        {editMode && 
          <DonationForm
            open={editMode}
            donation={donation}
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
    border: `2px solid #00000000`,
    marginBottom: 5,
    borderRadius: 3,
    transition: 'background 50ms',
    height: "fit-content",
    border: `2px solid #FFFFFF10`,
    "&:hover":{
      background: theme.palette.backgrounds.tableRow,
      border: `2px solid ${theme.palette.borderColor}`,
    }
  },
  usable: {
    background: "#00FF892B",
    "&:hover": {
      background: "#00FF8938"  
    }
  },
  unusable: { 
    background: "#FFA60052",
    "&:hover": {
      background: "#FFA6005E"  
    }
  },
  noValicate: { 
    background: "#FFFFFF0D",
    "&:hover": {
      background: "#FFFFFF1A"  
    }
    
  },
  items: {
    minHeight: 41,
    padding: "2px 5px",
    fontSize: "0.8rem",
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

