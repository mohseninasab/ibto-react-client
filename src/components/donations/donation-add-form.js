
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { strings } from '../../constants';
import { useFormInput, useDirectFormInput, filterArray } from "common-component-methods"
import { baseActions } from "actions"
import DateFnsUtils from '@date-io/date-fns';

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
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";




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
  const classes = useStyles();

  const language = useSelector(state => state.language);
  const offices = useSelector(state => state.offices);
  const subjects = useSelector(state => state.subjects);
  const staff = useSelector(state => state.staff);
  
  const open = useFormInput(false);
  const searchQuery = useFormInput("");
  const [step, setStep] = useState(0)

  const date = useDirectFormInput(new Date());
  const expDate = useDirectFormInput(new Date());
  const serial = useFormInput("");
  const other = useFormInput("");

  const [donor, setDonor] = useState(null);
  const [patient, setPatient] = useState(null);
  const [phlebotomist, setPhlebotomist] = useState(null);
  const [examiner, setExaminer] = useState(null);
  const [donationOffice, setDonationOffice] = useState(null);
  const [laboratory, setLaboratory] = useState(null);
  const [usable, setUsable] = useState(null)
  
  // ###########################################################################
  // languages
  // ###########################################################################

  const {
    DonationsSerial,
    DonationsOther,
    DonationsSearchDonationOffice,
    DonationsSearchLaboratory,
    DonationsSearchDonor,
    DonationsSearchPatient,
    DonationsSearchPhlebotomist,
    DonationsSearchExaminer,

    DonationCreateButton,
    officeFormCloseButton,
    SubjectNationalCode,
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
      date: new Date(date.value).toISOString().split("T")[0],
      expDate: new Date(expDate.value).toISOString().split("T")[0],
      serial: serial.value,
      other: other.value,
      usable: usable ? 1 : usable === null ? null : 0,
      donor,
      patient,
      phlebotomist,
      examiner,
      donationOffice,
      laboratory,
    };
    console.log(data)
    dispatch(baseActions.donation(data));
    handleOpen();
  }


  // ###########################################################################
  // filtered array
  // ###########################################################################

  const filteredSubjects = filterArray(subjects, ["firstName", "lastName", "id", "nationalCode"], searchQuery.value);
  const filteredOffices = filterArray(offices, ["name", "city", "id"], searchQuery.value);
  const filteredStaff = filterArray(staff, ["firstName", "lastName", "id", "employeeNumber"], searchQuery.value);

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
        {DonationCreateButton}
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

      {/* ################################################################## */}
        <DialogContent classes={{root: classes.contents}}>
        {step === 0 &&
        <form autoComplete="off" onSubmit={handleNext}>
          <Grid container spacing={1} className={classes.dialogContainer}>

            <Grid container item xs={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  clearable
                  margin="dense"
                  variant='dialog'
                  inputVariant="outlined"
                  label={"date"}
                  format="dd/MM/yyyy"
                  { ...date }
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid container item xs={12} md={6}>
              <MuiPickersUtilsProvider classes={{root: classes.dateRoot}} utils={DateFnsUtils} >
                <KeyboardDatePicker
                  clearable
                  margin="dense"
                  variant='dialog'
                  inputVariant="outlined"
                  label={"Exp Date"}
                  format="dd/MM/yyyy"
                  { ...expDate }
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid container item xs={12} md={6}>
              <TextField
                required    
                className={`${classes.textField} ${classes.dense}`}
                label={DonationsSerial}
                margin="dense"
                variant="outlined"
                type="text"
                {...serial}
              />
            </Grid>

            <Grid container item xs={12} md={6}>
              <TextField
                //required    
                className={`${classes.textField} ${classes.dense}`}
                label={DonationsOther}
                margin="dense"
                variant="outlined"
                type="text"
                {...other}
              />
            </Grid>

            <Grid container item xs={12} md={12}>
              <Button
                className={classes.selectButton}
                variant={usable ? "contained" : "outlined"}
                color={usable ? "primary" : "secondary"}
                onClick={() => {setUsable(!usable)}}
              >
              {usable ? <CheckIcon/> : <CloseIcon/>} 
              {usable ? "USABLE" : "UNUSABLE"} 
              {usable ? <CheckIcon/> : <CloseIcon/>}
              </Button>
            </Grid>

          </Grid>
          <Grid container spacing={1}>  
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

        {/* ################################################################## */}

        {step === 1 && 
          <Grid spacing={1} container className={classes.dialogContainer}> 
            <Grid spacing={1} item container > 
              <TextField
                className={`${classes.textField} ${classes.dense}`}
                label={DonationsSearchDonationOffice}
                margin="dense"
                variant="outlined"
                type="text"
                {...searchQuery}
              />
            </Grid>
            <Grid container item alignContent="flex-start" spacing={1} className={classes.officesContainer}> 
              {filteredOffices.map(item => {
                return (
                <Grid key={item.id} item xs={12} sm={6} md={4} className={classes.officeItem}>
                  <Chip
                    classes={{root: classes.chip}}
                    icon={donationOffice === item.id ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/> }
                    label={item.name}
                    variant="outlined"
                    onClick={() => {setDonationOffice(item.id)}}
                    color={donationOffice === item.id ? "secondary" : "primary"}
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
                  onClick={handleNext}
                >
                  {NextButton}
                </Button>

              </Grid>
          </Grid>
        }

      {/* ################################################################## */}

        {step === 2 && 

          <Grid spacing={1} container className={classes.dialogContainer}> 
            <TextField
              className={`${classes.textField} ${classes.dense}`}
              label={DonationsSearchDonor}
              margin="dense"
              variant="outlined"
              type="text"
              {...searchQuery}
            />
            <Grid container alignContent="flex-start" spacing={1} className={classes.officesContainer}> 
              {filteredSubjects.map(item => {
                return (
                <Grid key={item.id} item xs={12} sm={6} md={6} className={classes.officeItem}>
                  <Chip
                    classes={{root: classes.chip}}
                    icon={donor === item.id ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/> }
                    label={`${item.firstName} ${item.lastName} - ${SubjectNationalCode}: ${item.nationalCode}`}
                    variant="outlined"
                    onClick={() => {setDonor(item.id)}}
                    color={donor === item.id ? "secondary" : "primary"}
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
                  onClick={handleNext}
                >
                  {NextButton}
                </Button>

              </Grid>
          </Grid>
        }

        {/* ################################################################## */}

        {step === 3 && 
          <Grid spacing={1} container className={classes.dialogContainer}> 
            <TextField
              className={`${classes.textField} ${classes.dense}`}
              label={DonationsSearchPatient}
              margin="dense"
              variant="outlined"
              type="text"
              {...searchQuery}
            />
            <Grid container alignContent="flex-start" spacing={1} className={classes.officesContainer}> 
              {filteredSubjects.map(item => {
                return (
                <Grid key={item.id} item xs={12} sm={6} md={6} className={classes.officeItem}>
                  <Chip
                    classes={{root: classes.chip}}
                    icon={patient === item.id ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/> }
                    label={`${item.firstName} ${item.lastName} - ${SubjectNationalCode}: ${item.nationalCode}`}
                    variant="outlined"
                    onClick={() => {setPatient(item.id)}}
                    color={patient === item.id ? "secondary" : "primary"}
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
                  onClick={handleNext}
                >
                  {NextButton}
                </Button>

              </Grid>
          </Grid>
        }

      {/* ################################################################## */}

        {step === 4 && 
          <Grid spacing={1} container className={classes.dialogContainer}> 
            <TextField
              className={`${classes.textField} ${classes.dense}`}
              label={DonationsSearchPhlebotomist}
              margin="dense"
              variant="outlined"
              type="text"
              {...searchQuery}
            />
            <Grid container alignContent="flex-start" spacing={1} className={classes.officesContainer}> 
              {filteredStaff.map(item => {
                return (
                <Grid key={item.id} item xs={12} sm={6} md={6} className={classes.officeItem}>
                  <Chip
                    classes={{root: classes.chip}}
                    icon={phlebotomist === item.id ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/> }
                    label={`${item.firstName} ${item.lastName} - ${SubjectNationalCode}: ${item.employeeNumber}`}
                    variant="outlined"
                    onClick={() => {setPhlebotomist(item.id)}}
                    color={phlebotomist === item.id ? "secondary" : "primary"}
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
                  onClick={handleNext}
                >
                  {NextButton}
                </Button>

              </Grid>
          </Grid>
        }

      {/* ################################################################## */}

        {step === 5 && 
          <Grid spacing={1} container className={classes.dialogContainer}>
            <TextField
              className={`${classes.textField} ${classes.dense}`}
              label={DonationsSearchExaminer}
              margin="dense"
              variant="outlined"
              type="text"
              {...searchQuery}
            />
            <Grid container alignContent="flex-start" spacing={1} className={classes.officesContainer}> 
              {filteredStaff.map(item => {
                return (
                <Grid key={item.id} item xs={12} sm={6} md={6} className={classes.officeItem}>
                  <Chip
                    classes={{root: classes.chip}}
                    icon={examiner === item.id ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/> }
                    label={`${item.firstName} ${item.lastName} - ${SubjectNationalCode}: ${item.employeeNumber}`}
                    variant="outlined"
                    onClick={() => {setExaminer(item.id)}}
                    color={examiner === item.id ? "secondary" : "primary"}
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
                  onClick={handleNext}
                >
                  {NextButton}
                </Button>

              </Grid>
          </Grid>
        }

      {/* ################################################################## */}

          {step === 6 && 
          <Grid spacing={1} container className={classes.dialogContainer}> 
            <TextField
              className={`${classes.textField} ${classes.dense}`}
              label={DonationsSearchLaboratory}
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
                    icon={laboratory === item.id ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/> }
                    label={item.name}
                    variant="outlined"
                    onClick={() => {setLaboratory(item.id)}}
                    color={laboratory === item.id ? "secondary" : "primary"}
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
                  {DonationCreateButton}
                </Button>

              </Grid>
          </Grid>
        }

      {/* ################################################################## */}


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
  dateRoot:{
    backgroundColor: "red",
  },
  chip:{
    width: "100%",
    justifyContent:"flex-start",
    borderWidth: 2,
    borderRadius: 3,
  },
  officeItem:{
    height: "fit-content",
  },
  contents:{
    padding: "10px !important",
    minHeight: 310,
  },
  dialogContainer:{
    minHeight: 244,
    alignContent: "flex-start",
    maxHeight: "calc(100vh - 135px)",
    [theme.breakpoints.down("sm")]:{
      maxHeight: "calc(100vh - 135px)",
      minHeight: "calc(100vh - 135px)",
    }
  },
  officesContainer:{
    minHeight: 192,
    marginTop: 0,
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
  },
  selectButton: {
    width: "100%",
    "& > span":{
      display: "flex",
      justifyContent: "space-between",
    }
  },
}));

// #############################################################################
// export 
// #############################################################################


export { DonationAddForm };