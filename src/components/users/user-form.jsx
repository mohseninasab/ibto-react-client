import React, { useState } from 'react';
import { useFormInput } from "../../common-component-methods/use-form-input";
import { CheckBoxCustome } from '../check-box-custom';
import { Person, Company } from "../icons";
import { useSelector } from "react-redux";
import { strings } from '../../constants';
import { PhoneNumberInput } from '../phone-input';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography"

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';


// #############################################################################
// ant switch component
// #############################################################################

const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: "white",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
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

export function UserForm(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adminForm, setAdminForm] = useState(false);
  const [clientForm, setClientForm] = useState(false);
  const [opratorForm, setOpratorForm] = useState(false);
  const [accountType, setType] = useState("");
  const [active, setActive] = useState(false)


  // personal and account information.
  const password = useFormInput("");
  const email = useFormInput("");
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const nationality = useFormInput("");
  const [mobile, setMobile] = useState({});
  const companyName = useFormInput("");

  // company address and some information
  const positionInCompany = useFormInput("")
  const companyCountry = useFormInput("")
  const companyState = useFormInput("")
  const companyCity = useFormInput("")
  const companyAddress = useFormInput("")
  const companyPostalCode = useFormInput("")

  // address
  const country = useFormInput("");
  const city = useFormInput("");
  const state = useFormInput("");
  const postalCode = useFormInput("");
  const address = useFormInput("");

  // styles
  const classes = useStyles();


  // ###[ language strings ]####################################################
  const language = useSelector(state => state.language);
  const {
    // select box labels
    userFormPersonal,
    userFormCompany,

    // account type labels
    userFormAddUser,
    userFormClient,
    userFormAdmin,
    userFormOperator,

    //user prosonal information labels
    userFormFirstName,
    userFormLastName,
    userFormEmail,
    userFormPassword,
    userFormCompanyName,
    userFormNationality,
    userFormActive,

    // company inputs labels
    userFormPositionInCompany,
    userFormcompanyCountry,
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
    userFormSave,
  } = strings[language].texts;

  // ###########################################################################
  // this function will handle the change in the user mobile number and guss the 
  // the nationality of the number based on the country code
  // ###########################################################################

  const handleChangeMobile = (data) => {
    setMobile(data)
  }

  // ###########################################################################
  // handles the change in the switch
  // ###########################################################################

  const handleChangeSwitch = name => event => {
    setActive(event.target.checked);
  }
  
  // ###########################################################################
  // handle opne modal
  // ###########################################################################

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  // ###########################################################################
  // handle close the popup list
  // ###########################################################################

  const handleClose = () => {
    setAnchorEl(null);
  };

  // ###########################################################################
  // handle close the popup list
  // ###########################################################################

  const handleCloseForm = () => {
    setAdminForm(false);
    setOpratorForm(false);
    setClientForm(false);
  };

  // ###########################################################################
  // handle save data
  // ###########################################################################

  const addUser = event => {
    event.preventDefault();
    const data = {
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
      mobile: mobile.country.dialCode + mobile.number,
      active,
      ...definedaccountType(accountType)
    }
    props.addUser(data);
    handleCloseForm();
  }

  // ###########################################################################
  // this funciton will defined the type of account to make.
  // ###########################################################################

  const definedaccountType = (account) => {
    switch(account){
      case "operator":    
        return {role: "operator", isPersonal: true}
      case "client":
        return {
          role: "client",
          isPersonal: true,
          country: country.value,
          state: state.value,
          city: city.value,
          postalCode: postalCode.value,
          address: address.value,
        }
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
          companyAddress: companyAddress.value,
        }
      default:
        return { role: "client", isPersonal: true }
    }

  }

  // ###########################################################################
  // handel the account Type
  // ###########################################################################

  const handleAccountType = (event) => {
    setType(event.target.name);
  }

  // ###########################################################################
  // this button will open up the admin form
  // ###########################################################################

  // const openAdminForm = () => {
  //   setAdminForm(true)
  //   setType("admin")
  // }

  // ###########################################################################
  // this button will open up the oprator form
  // ###########################################################################

  const openOpratorForm = () => {
    setOpratorForm(true);
    setType("oprator")
  }

  // ###########################################################################
  // this button will open up the client form
  // ###########################################################################

  const openClientFrom = () => {
    setClientForm(true)
    setType("client")
  }

  // ###########################################################################
  // component view
  // ###########################################################################

  return (
    <Grid container justify="flex-end">
      <Button variant="contained" color="primary" onClick={handleClick}>
        {userFormAddUser}
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.disable}>{userFormAdmin}</MenuItem>
        <MenuItem onClick={openOpratorForm}>{userFormOperator}</MenuItem>
        <MenuItem onClick={openClientFrom}>{userFormClient}</MenuItem>
      </Menu>

      <Dialog
        open={clientForm || adminForm || opratorForm}
        TransitionComponent={Transition}
        onClose={handleCloseForm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
      <form autoComplete="off" onSubmit={addUser}>
        <DialogTitle id="alert-dialog-title">{"Add New User Here"}</DialogTitle>
        <DialogContent>
            <Grid container spacing={1}>
              {accountType !== "oprator" &&
                <Grid item container spacing={1} className={classes.checkBoxHolder} >
                  <Grid item xs={12} sm={6} md={6}>
                    <CheckBoxCustome
                      name="client"
                      onChange={handleAccountType}
                      checked={accountType === "client"}
                      label={userFormPersonal}
                    >
                      <Person/>
                    </CheckBoxCustome>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <CheckBoxCustome
                      name="company"
                      onChange={handleAccountType}
                      checked={accountType === "company"}
                      label={userFormCompany}
                    >
                      <Company/>
                    </CheckBoxCustome>
                  </Grid>
                </Grid>
              }

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
                <TextField
                  required
                  className={`${classes.textField} ${classes.dense}`}
                  label={userFormPassword}
                  margin="dense"
                  variant="outlined"
                  type="password"
                  {...password}
                />
              </Grid>

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
                <PhoneNumberInput
                  isValid={mobile.isValid}
                  className={classes.mobileInput}
                  type="number"
                  required
                  onChange={handleChangeMobile}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  required
                  className={`${classes.textField} ${classes.dense}`}
                  label={userFormNationality}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...nationality}
                />
              </Grid>

              <Grid className={classes.switchHolder} alignItems="center" container item xs={12} sm={12} md={6}>
                <Typography component="div" className={classes.switch}>
                  <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>
                      <AntSwitch
                        checked={active}
                        onChange={handleChangeSwitch('active')}
                        value="checkedC"
                      />
                    </Grid>
                    <Typography >{userFormActive}</Typography>
                  </Grid>
                </Typography>
               </Grid>
              
              {clientForm && accountType === "client" && 
                <React.Fragment>

              {/* #####[ address ]########################################## */}

                  <Grid container item xs={12}>
                    <Typography className={classes.addressLable}>{userFormAddressLabel}</Typography>
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
              }


              {clientForm && accountType === "company" && 
                <React.Fragment>

                  {/* #####[ address ]########################################## */}

                  <Grid container item xs={12}>
                    <Typography className={classes.addressLable}>{userFormAddressLabel}</Typography>
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
                      label={userFormcompanyCountry}
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
              }

            </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            {userFormCancel}
          </Button>
          <Button type="submit" color="primary" autoFocus>
            {userFormSave}
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{},
  textField:{
    width: "100%",
  },
  buttonText:{
    fontSize: 14,
  },
  menueButton:{
    borderRadius: 30,
    color: "#0088ff",
  },
  addressLable:{
    width: "100%",
    textAlign: "left",
  },
  gridDirection: {
    direction: "ltr"
  },
  mobileInput:{
    marginTop: 8,
    marginBottom: 4,
  },
  switchHolder:{
    minHeight: 60
  },
  disable:{
    color: theme.palette.text.disabled,
  }
}));