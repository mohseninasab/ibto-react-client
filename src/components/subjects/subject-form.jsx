
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { strings } from '../../constants';
import { useFormInput } from "common-component-methods"
import { baseActions } from "actions";

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

export default function SubjectForm(props) {
  const { subject = {}, open = false } = props;
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const classes = useStyles();

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
    officeFormDeleteButton,
    officeFormApproveButton,
  } = strings[language].texts;

  // ###########################################################################
  // handle delete
  // ###########################################################################

  const Delete = () => {
    dispatch(baseActions.deleteSubject({id: subject.id}));
    props.closeForm();
  }

  // ###########################################################################
  // update offices
  // ###########################################################################

  const update = (event) => {
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
    dispatch(baseActions.updateSubject(data));
    props.closeForm();
  }

  // ###########################################################################
  // return of the component 
  // ###########################################################################

  return (
    <Dialog
      classes={{paper: classes.root}}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.closeForm}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent classes={{root: classes.contents}}>
      <form autoComplete="off" onSubmit={update}>
        <Grid container spacing={1} className={classes.dialogContainer}>


          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={SubjectFirstName}
              margin="dense"
              variant="outlined"
              type="email"
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
              type="email"
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
              type="email"
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
              type="email"
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
              type="email"
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
              type="email"
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
              type="email"
              {...address}
            />
          </Grid>

          <Grid container justify="flex-end" className={classes.buttonHolders}>  
              <Button
                className={classes.button}
                color="secondary"
                onClick={props.closeForm}
              >
                {officeFormCloseButton}
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={Delete}
              >
                {officeFormDeleteButton}
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={update}
              >
                {officeFormApproveButton}
              </Button>
            </Grid>
          
        </Grid>
        </form>
      </DialogContent>
    </Dialog>
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
    marginLeft: 10,
    height: "fit-content"
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


export { SubjectForm };