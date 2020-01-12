import React, { useState } from "react";
import { useFormInput } from "../../common-component-methods/use-form-input";
import { useSelector } from "react-redux";
import { strings } from "../../constants";
import { PhoneNumberInput } from "../phone-input";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Switch from "@material-ui/core/Switch";

import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

// #############################################################################
// ant switch component
// #############################################################################

const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex"
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: "white"
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none"
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

// #############################################################################
// transition for the dialog box
// #############################################################################

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// #############################################################################
// component
// #############################################################################

export function EditForm(props) {
  const accountType =
    props.user.role === "client"
      ? props.user.isPersonal
        ? "client"
        : "company"
      : "oprator";
  const isCompany = accountType === "company";

  const [clientForm, setClientForm] = useState(props.user.role === "client");
  const [active, setActive] = useState(props.user.active);

  // personal and account information.
  const email = useFormInput(props.user.email);
  const firstName = useFormInput(props.user.firstName);
  const lastName = useFormInput(props.user.lastName);
  const nationality = useFormInput(props.user.nationality);
  const [mobile, setMobile] = useState({});

  // company address and some information
  const companyName = useFormInput(isCompany ? props.user.companyName : "");
  const positionInCompany = useFormInput(
    isCompany ? props.user.positionInCompany : ""
  );
  const companyCountry = useFormInput(
    isCompany ? props.user.companyCountry : ""
  );
  const companyState = useFormInput(isCompany ? props.user.companyState : "");
  const companyCity = useFormInput(isCompany ? props.user.companyCity : "");
  const companyAddress = useFormInput(isCompany ? props.user.address : "");
  const companyPostalCode = useFormInput(
    isCompany ? props.user.companyPostalCode : ""
  );

  // address
  const country = useFormInput(!isCompany ? props.user.country : "");
  const city = useFormInput(!isCompany ? props.user.city : "");
  const state = useFormInput(!isCompany ? props.user.state : "");
  const postalCode = useFormInput(!isCompany ? props.user.postalCode : "");
  const address = useFormInput(!isCompany ? props.user.address : "");

  // styles
  const classes = useStyles();

  // ###[ language strings ]####################################################
  const language = useSelector(state => state.language);
  const {
    //user prosonal information labels
    userFormFirstName,
    userFormLastName,
    userFormEmail,
    userFormCompanyName,
    userFormNationality,
    userFormActive,

    // company inputs labels
    userFormPositionInCompany,
    userFormCompanyCountry,
    userFormCompanyState,
    userFormCompanyCity,
    userFormCompanyPostalCode,
    userCompanyAddressInput,

    // address information labels
    userFormAddressLabel,
    userFormCountry,
    userFormState,
    userFormCity,
    userFormPostalCode,
    userFormAddressInput,

    //button lebels
    userFormCancel,
    userFormSave
  } = strings[language].texts;

  // ###########################################################################
  // this function will handle the change in the user mobile number and guss the
  // the nationality of the number based on the country code
  // ###########################################################################

  const handleChangeMobile = data => {
    setMobile(data);
  };

  // ###########################################################################
  // handles the change in the switch
  // ###########################################################################

  const handleChangeSwitch = name => event => {
    setActive(event.target.checked);
  };

  // ###########################################################################
  // handle close the popup list
  // ###########################################################################

  const handleCloseForm = () => {
    setClientForm(false);
  };

  // ###########################################################################
  // handle save data
  // ###########################################################################

  const updateUser = event => {
    event.preventDefault();
    const data = {
      _id: props.user._id,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      nationality: nationality.value,
      mobile: mobile.number
        ? (mobile.country.dialCode ? mobile.country.dialCode : "") +
          mobile.number
        : undefined,
      active,
      ...definedaccountType(accountType)
    };
    props.update(data);
    handleCloseForm();
  };

  // ###########################################################################
  // this funciton will defined the type of account to make.
  // ###########################################################################

  const definedaccountType = account => {
    switch (account) {
      case "operator":
        return { role: "operator", isPersonal: true };
      case "client":
        return {
          role: "client",
          isPersonal: true,
          country: country.value,
          state: state.value,
          city: city.value,
          postalCode: postalCode.value,
          address: address.value
        };
      case "company":
        return {
          role: "client",
          isPersonal: false,
          positionInCompany: positionInCompany.value,
          companyName: companyName.value,
          ompanyCountry: companyCountry.value,
          companyState: companyState.value,
          companyCity: companyCity.value,
          companyPostalCode: companyPostalCode.value,
          companyAddress: companyAddress.value
        };
      default:
        return { role: "client", isPersonal: true };
    }
  };

  // ###########################################################################
  // component view
  // ###########################################################################

  return (
    <Dialog
      open={props.showForm}
      TransitionComponent={Transition}
      onClose={props.closeEditMode}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
    >
      <form autoComplete="off" onSubmit={updateUser}>
        <DialogTitle id="alert-dialog-title">{"Add New User Here"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                required
                className={`${classes.textField} ${classes.dense}`}
                label={userFormFirstName}
                margin="dense"
                variant="outlined"
                type="text"
                {...firstName}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <TextField
                required
                className={`${classes.textField} ${classes.dense}`}
                label={userFormLastName}
                margin="dense"
                variant="outlined"
                type="text"
                {...lastName}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <TextField
                required
                className={`${classes.textField} ${classes.dense}`}
                label={userFormEmail}
                margin="dense"
                variant="outlined"
                type="email"
                {...email}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <PhoneNumberInput
                placeholder={props.user.mobile}
                isValid={mobile.isValid}
                className={classes.mobileInput}
                type="number"
                required
                onChange={handleChangeMobile}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <TextField
                className={`${classes.textField} ${classes.dense}`}
                label={userFormNationality}
                margin="dense"
                variant="outlined"
                type="text"
                {...nationality}
              />
            </Grid>

            <Grid
              className={classes.switchHolder}
              alignItems="center"
              container
              item
              xs={12}
              sm={12}
              md={6}
            >
              <Typography component="div" className={classes.switch}>
                <Grid
                  component="label"
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <AntSwitch
                      checked={active}
                      onChange={handleChangeSwitch("active")}
                      value="checkedC"
                    />
                  </Grid>
                  <Typography>{userFormActive}</Typography>
                </Grid>
              </Typography>
            </Grid>

            {clientForm && accountType === "client" && (
              <React.Fragment>
                {/* #####[ address ]########################################## */}

                <Grid container item xs={12}>
                  <Typography className={classes.addressLable}>
                    {userFormAddressLabel}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormCountry}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...country}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormState}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...state}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormCity}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...city}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormPostalCode}
                    margin="dense"
                    variant="outlined"
                    type="number"
                    {...postalCode}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    multiline
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormAddressInput}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...address}
                  />
                </Grid>
              </React.Fragment>
            )}

            {clientForm && accountType === "company" && (
              <React.Fragment>
                {/* #####[ address ]########################################## */}

                <Grid container item xs={12}>
                  <Typography className={classes.addressLable}>
                    {userFormAddressLabel}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormCompanyName}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...companyName}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormPositionInCompany}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...positionInCompany}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormCompanyCountry}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...companyCountry}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormCompanyState}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...companyState}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormCompanyCity}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...companyCity}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <TextField
                    className={`${classes.textField} ${classes.dense}`}
                    label={userFormCompanyPostalCode}
                    margin="dense"
                    variant="outlined"
                    type="number"
                    {...companyPostalCode}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    multiline
                    className={`${classes.textField} ${classes.dense}`}
                    label={userCompanyAddressInput}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...companyAddress}
                  />
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeEditMode} color="primary">
            {userFormCancel}
          </Button>
          <Button type="submit" color="primary" autoFocus>
            {userFormSave}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root: {},
  textField: {
    width: "100%"
  },
  buttonText: {
    fontSize: 14
  },
  menueButton: {
    borderRadius: 30,
    color: "#0088ff"
  },
  addressLable: {
    width: "100%",
    textAlign: "left"
  },
  gridDirection: {
    direction: "ltr"
  },
  mobileInput: {
    marginTop: 8,
    marginBottom: 4
  },
  switchHolder: {
    minHeight: 60
  },
  disable: {
    color: theme.palette.text.disabled
  }
}));
