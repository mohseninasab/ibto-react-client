
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { strings } from '../../constants';
import { useFormInput, filterArray } from "common-component-methods"
import { baseActions } from "actions"

import { makeStyles } from "@material-ui/core"

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";


// #############################################################################
// transition for the dialog box
// #############################################################################

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// #############################################################################
// component
// #############################################################################

export default function DonationAddForm(props) {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const offices = useSelector(state => state.offices);
  const classes = useStyles();
  const open = useFormInput(false);
  const [step, setStep] = useState(0)
  const [office, setOffice] = useState(undefined);

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const employeeNumber = useFormInput("");
  const role = useFormInput("");
  const city = useFormInput("");
  const phoneNumber = useFormInput("");
  const address = useFormInput("");
  const searchQuery = useFormInput("");
  
  // ###########################################################################
  // languages
  // ###########################################################################

  const {

    StaffFirstName,
    StaffLastName,
    StaffNumber,
    StaffRole,
    StaffPhoneNumber,
    StaffAddress,
    StaffCity,
    StaffFormCreateButton,

    officeFormCloseButton,
    NextButton,
    backButton,
  } = strings[language].texts;

  // ###########################################################################
  // open the form
  // ###########################################################################

  const handleOpen = () => {
    open.onChange({target: {value: !open.value}})
  }

  // ###########################################################################
  // add new office
  // ###########################################################################

  const handleNext = (event) => {
    event.preventDefault();
    setStep(step + 1);
  }

  // ###########################################################################
  // add new office
  // ###########################################################################

  const handleBack = () => {
    setStep(step - 1);
  }

  // ###########################################################################
  // handle back
  // ###########################################################################

  const add = (event) => {
    event.preventDefault();
    const data = { 
      firstName: firstName.value,
      lastName: lastName.value,
      employeeNumber: employeeNumber.value,
      role: role.value,
      office: office,
      city: city.value, 
      address: address.value,
      phoneNumber: phoneNumber.value
    };
    dispatch(baseActions.staff(data));
    handleOpen();
  }


  // ###########################################################################
  // filtered array
  // ###########################################################################

  const filteredOffices = filterArray(offices, ["name", "city", "id"], searchQuery.value);

  // ###########################################################################
  // return of the component 
  // ###########################################################################

  return (
    <React.Fragment>
      <Button
        className={classes.addButton}
        variant="contained"
        color="secondary"
        onClick={handleOpen}
      >
        {StaffFormCreateButton}
      </Button>
      <Dialog
        classes={{paper: classes.root}}
        open={open.value}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOpen}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent classes={{root: classes.contents}}>
        {step === 0 &&

        <form autoComplete="off" onSubmit={handleNext}>
          <Grid container spacing={1} className={classes.dialogContainer}>

          <Grid container item xs={12} md={6}>
            <TextField
              
              className={`${classes.textField} ${classes.dense}`}
              label={StaffFirstName}
              margin="dense"
              variant="outlined"
              type="text"
              {...firstName}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              
              className={`${classes.textField} ${classes.dense}`}
              label={StaffLastName}
              margin="dense"
              variant="outlined"
              type="text"
              {...lastName}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              
              className={`${classes.textField} ${classes.dense}`}
              label={StaffNumber}
              margin="dense"
              variant="outlined"
              type="text"
              {...employeeNumber}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              
              className={`${classes.textField} ${classes.dense}`}
              label={StaffRole}
              margin="dense"
              variant="outlined"
              type="text"
              {...role}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              
              className={`${classes.textField} ${classes.dense}`}
              label={StaffPhoneNumber}
              margin="dense"
              variant="outlined"
              type="number"
              {...phoneNumber}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              
              className={`${classes.textField} ${classes.dense}`}
              label={StaffCity}
              margin="dense"
              variant="outlined"
              type="text"
              {...city}
            />
          </Grid>

          <Grid container item xs={12}>
            <TextField
              
              className={`${classes.textField} ${classes.dense}`}
              label={StaffAddress}
              margin="dense"
              variant="outlined"
              type="text"
              {...address}
            />
          </Grid>

            <Grid item container justify="flex-end" className={classes.buttonHolders}>  
                <Button
                  className={classes.button}
                  color="secondary"
                  onClick={handleOpen}
                >
                  {officeFormCloseButton}
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {NextButton}
                </Button>
              </Grid>
            
          </Grid>
          </form>
        }
        {step === 1 && 

          <Grid spacing={1} container className={classes.dialogContainer}> 
            <TextField
              className={`${classes.textField} ${classes.dense}`}
              label={StaffCity}
              margin="dense"
              variant="outlined"
              type="text"
              {...searchQuery}
            />
            <Grid container alignContent="flex-start" spacing={1} className={classes.officesContainer}> 
              {filteredOffices.map(item => {
                return (
                <Grid key={item.id} item xs={12} sm={6} md={4} className={classes.officeItem}>
                  <Chip
                    classes={{root: classes.chip}}
                    icon={office === item.id ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/> }
                    label={item.name}
                    variant="outlined"
                    onClick={() => {setOffice(item.id)}}
                    color={office === item.id ? "secondary" : "primary"}
                  />
                </Grid>
                )
              })}
            </Grid>

            <Grid container item justify="flex-end" className={classes.buttonHolders}>  
                <Button
                  className={classes.button}
                  color="secondary"
                  onClick={handleOpen}
                >
                  {officeFormCloseButton}
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={handleBack}
                >
                  {backButton}
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={add}
                >
                  {StaffFormCreateButton}
                </Button>
              </Grid>
          </Grid>

        }
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    [theme.breakpoints.up("md")]:{
      width: "60%",
      maxWidth: "60%"
    }
  },
  chip:{
    width: "100%",
    justifyContent:"flex-start",
    borderWidth: 2,
  },
  officeItem:{
    height: "fit-content",
  },
  contents:{
    padding: "10px !important",
    minHeight: 310,
  },
  dialogContainer:{
    maxHeight: "calc(100vh - 135px)",
    [theme.breakpoints.down("sm")]:{
      maxHeight: "calc(100vh - 135px)",
      minHeight: "calc(100vh - 135px)",
    }
  },
  officesContainer:{

    minHeight: 177,
    marginTop: 15,
  },
  addButton:{
    margin: "5px 0",
    height: 40,
    width: "-webkit-fill-available",
  },
  button:{
    height: "fit-content",
    marginLeft: 5,
    marginTop: 5,
  },
  buttonHolders:{
    marginTop: 10
  },
  line:{
    width: "100%",
    borderBottom: `1px dashed ${theme.palette.borderColor}`,
    margin: "10px 0px"
  }
}));

// #############################################################################
// export 
// #############################################################################


export { DonationAddForm };