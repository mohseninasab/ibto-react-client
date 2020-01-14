
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { strings } from '../../constants';
import { useFormInput } from "common-component-methods"
import { baseActions } from "actions"

import { makeStyles } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"


// #############################################################################
// transition for the dialog box
// #############################################################################

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// #############################################################################
// component
// #############################################################################

export default function SubjectAddForm(props) {
  const { subject = {} } = props;
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const classes = useStyles();
  const open = useFormInput(false);

  const firstName = useFormInput(subject.firstName);
  const lastName = useFormInput(subject.lastName);
  const bloodType = useFormInput(subject.bloodType);
  const nationalCode = useFormInput(subject.nationalCode);
  const city = useFormInput(subject.city);
  const phoneNumber = useFormInput(subject.phoneNumber);
  const address = useFormInput(subject.address);
  

  // ###########################################################################
  // languages
  // ###########################################################################

  const {

    SubjectFirstName,
    SubjectLastName,
    SubjectBloodType,
    SubjectPhoneNumber,
    SubjectNationalCode,
    SubjectAddress,
    SubjectCity,

    officeFormCloseButton,
    SubjectSaveButton,
    SubjectCreateButton,
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

  const addOffice = (event) => {
    event.preventDefault();
    const data = { 
      id: subject.id,
      firstName: firstName.value,
      lastName: lastName.value,
      bloodType: bloodType.value,
      nationalCode: nationalCode.value,
      city: city.value, 
      address: address.value,
      phoneNumber: phoneNumber.value
    };
    dispatch(baseActions.subject(data));
    handleOpen();
  }

  // ###########################################################################
  // return of the component 
  // ###########################################################################

  return (
    <React.Fragment>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handleOpen}
      >
        {SubjectCreateButton}
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
        <form autoComplete="off" onSubmit={addOffice}>
          <Grid container spacing={1} className={classes.dialogContainer}>

            <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectFirstName}
              margin="dense"
              variant="outlined"
              type="text"
              {...firstName}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectLastName}
              margin="dense"
              variant="outlined"
              type="text"
              {...lastName}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectBloodType}
              margin="dense"
              variant="outlined"
              type="text"
              {...bloodType}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectNationalCode}
              margin="dense"
              variant="outlined"
              type="number"
              {...nationalCode}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectPhoneNumber}
              margin="dense"
              variant="outlined"
              type="number"
              {...phoneNumber}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectCity}
              margin="dense"
              variant="outlined"
              type="text"
              {...city}
            />
          </Grid>

          <Grid container item xs={12}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectAddress}
              margin="dense"
              variant="outlined"
              type="text"
              {...address}
            />
          </Grid>

            <Grid container justify="flex-end" className={classes.buttonHolders}>  
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
                  {SubjectSaveButton}
                </Button>
              </Grid>
            
          </Grid>
          </form>
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
  contents:{
    padding: "10px !important",
  },
  dialogContainer:{
    maxHeight: "calc(100vh - 135px)",
    [theme.breakpoints.down("sm")]:{
      maxHeight: "calc(100vh - 135px)",
      minHeight: "calc(100vh - 135px)",
    }
  },
  button:{
    height: "fit-content",
    marginTop: 5,
  },
  buttonHolders:{
    marginTop: 20
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


export { SubjectAddForm };