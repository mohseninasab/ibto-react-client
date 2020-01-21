import React from 'react';
import { strings } from '../../constants';
import { useSelector } from "react-redux"
import { parseDate } from "common-component-methods"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"


// #############################################################################
// component
// #############################################################################

export default function UserDonation(props){
  const { donation = {} } = props;
  const language = useSelector(state => state.language);
  const classes = useStyles();

  // ###########################################################################
  // component text based on the selected language
  // ###########################################################################

  const {
    DonationsId,
    DonationsDonor,
    DonationsDonorNationalCode,
    DonationsOffice,
    DonationsDate,
    DonationsExpDate,
    DonationsExaminer,
    DonationsPhlebotomist,
    DonationPatient,
    DonationPatientNationalCode,
    DonationsExaminerEmployeeNumber,
    DonationsPhlebotomistEmployeeNumber,
    DonationsLaboratory,

  } = strings[language].texts;

  // ###########################################################################
  // render
  // ###########################################################################
    
    return (
      <Grid container className={`${classes.root} ${donation.usable === 1 ? classes.usable : donation.usable === 0 ? classes.unusable : classes.noValicate  }`}>

        <Grid container alignItems="center" item xs={12} md={1} lg={1} className={classes.items}>
          <Typography variant="h6" noWrap>{DonationsId}: {donation.id}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12} md={7} lg={7} className={classes.items}>
          <Typography variant="h6" noWrap>{donation.serial}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsDate}: {parseDate(donation.date)}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="subtitle2" color="secondary" noWrap>{DonationsExpDate}: {parseDate(donation.expDate)}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={1} lg={1} className={`${classes.items} ${classes.bloodType}`}>
          <Typography variant="inherit" noWrap>{donation.bloodType}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={12} lg={12} className={`${classes.items} ${classes.useable}`}>
          <Typography variant="inherit" color={donation.usable === 1 ? "primary" : donation.usable === 0 ? "secondary" : "default" } noWrap>
          {donation.usable === 1 ? "USABLE" : donation.usable === 0 ? "UNUSABLE" : "NOT EXAMINED" }</Typography>
        </Grid>

        <Grid container><hr className={classes.line}/></Grid>

        <Grid container alignItems="center" item xs={12} md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsDonor}: {`${donation.donorFirstName} ${donation.donorLastName}`}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsDonorNationalCode}: {donation.donorNationalCode}</Typography>
        </Grid>

        <Grid container/>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationPatient}: {donation.patientFirstName} {donation.patientLastName}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationPatientNationalCode}: {donation.patientNationalCode}</Typography>
        </Grid>

        <Grid container/>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsExaminer}: {donation.examinerFirstName} {donation.examinerLastName}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsExaminerEmployeeNumber}: {donation.examinerEmployeeNumber}</Typography>
        </Grid>

        <Grid container/>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsPhlebotomist}: {donation.phlebotomistFirstName} {donation.phlebotomistLastName}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsPhlebotomistEmployeeNumber}: {donation.examinerEmployeeNumber}</Typography>
        </Grid>

        <Grid container/>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsOffice}: {donation.donationOfficeName} </Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={4} lg={4} className={classes.items}>
          <Typography variant="subtitle2" noWrap>{DonationsLaboratory}: {donation.laboratoryName}</Typography>
        </Grid>
        
      </Grid>
    );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    marginBottom: 10,
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
    background: "#B0FEFF24",
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
    color: theme.palette.text.primary,
    "&:hover": {
      cursor: "default",
    },
  },
  bloodType: {
    fontWeight: 600,
    position: "absolute",
    fontSize: 60,
    opacity: 0.3,
    right: -10,
    bottom: 0,
    overflow: "visible",
    display: "flex",
    justifyContent: "center",
  },
  useable: {
    fontWeight: 600,
    position: "absolute",
    fontSize: 60,
    opacity: 0.3,
    top: 40,
    overflow: "visible",
    display: "flex",
    justifyContent: "flex-end",
  },

  line:{
    width:"100%",
    border: "1px solid",
    opacity: 0.1,
  }
}));

// #############################################################################
// export the function component
// #############################################################################

export  { UserDonation };