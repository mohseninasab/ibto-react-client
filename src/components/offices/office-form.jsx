
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

export default function OfficeForm(props) {
  const { office = {}, open = false } = props;
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const classes = useStyles();
  const city = useFormInput(office.city);
  const phoneNumber = useFormInput(office.phoneNumber);
  const address = useFormInput(office.address);

  // ###########################################################################
  // languages
  // ###########################################################################

  const {
    officeFormCity,
    officeFormPhoneNumber,
    officeFormAddress,
    officeFormCloseButton,
    officeFormDeleteButton,
    officeFormApproveButton,
  } = strings[language].texts;

  // ###########################################################################
  // handle delete
  // ###########################################################################

  const DeleteOffice = () => {
    dispatch(baseActions.deleteOffice({id: office.id}));
    props.closeForm();
  }

  // ###########################################################################
  // update offices
  // ###########################################################################

  const updateOffice = (event) => {
    event.preventDefault();
    const data = { id: office.id, city: city.value, address: address.value, phoneNumber: phoneNumber.value };
    dispatch(baseActions.updateOffice(data));
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
      <form autoComplete="off" onSubmit={updateOffice}>
        <Grid container spacing={1} className={classes.dialogContainer}>

          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={officeFormCity}
              margin="dense"
              variant="outlined"
              type="email"
              {...city}
            />
          </Grid>

          <Grid container item xs={12} md={6}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={officeFormPhoneNumber}
              margin="dense"
              variant="outlined"
              type="email"
              {...phoneNumber}
            />
          </Grid>

          <Grid container item xs={12}>
            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={officeFormAddress}
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
                onClick={DeleteOffice}
              >
                {officeFormDeleteButton}
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={updateOffice}
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


export { OfficeForm };