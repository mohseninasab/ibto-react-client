import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { strings } from '../../constants';
import { SubjectForm } from "./"
import { useSelector } from "react-redux"

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"

// #############################################################################
// component
// #############################################################################

export default function Subject(props){
  const { subject = {} } = props;
  const language = useSelector(state => state.language);
  const history = useHistory();
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
  // this function will redirect user to the user donations page
  // ###########################################################################

  const goToUserDonation = (event) => {
    history.push(`/admin-dashboard/user-donations/${subject.nationalCode}`);
  }

  // ###########################################################################
  // render
  // ###########################################################################
    
    return (
      <Grid container item className={classes.root} >
        <button className={classes.link} onClick={goToUserDonation} />
        <Grid container alignItems="center" item xs={12} md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="primary" noWrap>{subject.id}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12} md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{`${subject.firstName} ${subject.lastName}`}</Typography>
        </Grid>

        <Grid container alignItems="center" justify="center" item xs={12}  md={1} lg={1} className={classes.items}>
          <Typography variant="inherit" color="secondary" noWrap>{subject.bloodType}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" color="secondary" noWrap>{subject.phoneNumber}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={2} lg={2} className={classes.items}>
          <Typography variant="inherit" noWrap>{subject.nationalCode}</Typography>
        </Grid>

        <Grid container alignItems="center" item xs={12}  md={3} lg={3} className={classes.items}>
          <Typography variant="inherit" noWrap>{`${subject.city} - ${subject.address}`}</Typography>
        </Grid>

        <Grid container alignItems="center" justify="flex-end" item xs={12} md={1} lg={1} className={classes.items}>
            <React.Fragment>
              <Button onClick={openEditMode} variant="contained" color="primary">{transactionDetailButton}</Button>
            </React.Fragment>
        </Grid>

        {editMode && 
          <SubjectForm
            open={editMode}
            subject={subject}
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
  link:{
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "none",
    border: "none",
    outline: "none",
    borderRadius: 3,
    transition: "box-shadow 150ms",
    boxShadow:"inset 0px 0px 0px 0px #41b8ff33",
    "&:hover":{
      cursor: "pointer",
    },
    "&:focus": {
      boxShadow:"inset 0px 0px 0px 3px #41b8ff33"
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

export  { Subject };

