import React from 'react';
import { useSelector } from "react-redux";
import { strings } from '../../constants';
import { PhoneNumberInput } from '../../components/phone-input'
import { useDirectFormInput, useFormInput } from "../../common-component-methods";

import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import DateFnsUtils from '@date-io/date-fns';

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

// #############################################################################
// component
// #############################################################################

export function Profile(props){
  const classes = useStyles();
  const language = useSelector(state => state.language);
  const birthDayDate = useDirectFormInput(new Date());
  const jBirthDayDate = useDirectFormInput(moment());
  const phoneNumber = useDirectFormInput({});
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const nationalCode = useFormInput("");
  const province = useFormInput("");
  const city = useFormInput("");
  const region = useFormInput("");
  const postalCode = useFormInput("");
  const mainStreet = useFormInput("");
  const street = useFormInput("");
  const alley = useFormInput("");
  const plaque = useFormInput("");
  const block = useFormInput("");
  const apartment = useFormInput("");
  const country = useFormInput("");
  const address = useFormInput("");
  const [isPersonal] = React.useState(false);
  const [isInternational] = React.useState(false);

  // ###########################################################################
  // text string
  const {
    profilePageFirstName,
    profilePageLastName,
    profilePageCompanyName,
    profilePageYourPosition,
    profilePageWorkingField,
    profilePageNationalCode,
    profilePageBirthday,
    profilePageAddress,
    profilePageCountry,
    profilePageCity,
    profilePageProvince,
    profilePageRegion,
    profilePagePostalCode,
    profilePageMainStreet,
    profilePageStreet,
    ProfilePageAlley,
    ProfilePagePlaque,
    ProfilePageBlock,
    ProfilePageApartment,
    ProfilePageSaveButton,
    datePickerOkLabel,
    datePickerCancelLabel,
    datePickerClearLabel,
  } = strings[language].texts;

  // ###########################################################################
  return (
    <Grid container justify="center">

      <Grid xs={12} sm={12} md={10} lg={10} item container spacing={1} className={classes.root}>
        <Paper square classes={{root: classes.paper}}>
          <Grid spacing={1} container item xs={12} sm={12} md={11} >
            { isPersonal ? null : 
              <React.Fragment>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <TextField
                    required
                    className={`${classes.textField}`}
                    label={profilePageCompanyName}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...firstName}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <TextField
                    required
                    className={`${classes.textField}`}
                    label={profilePageWorkingField}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...firstName}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <TextField
                    required
                    className={`${classes.textField}`}
                    label={profilePageYourPosition}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...firstName}
                  />
                </Grid>
              </React.Fragment>
            }


            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                required
                className={`${classes.textField}`}
                label={profilePageFirstName}
                margin="dense"
                variant="outlined"
                type="text"
                {...firstName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                required
                className={`${classes.textField}`}
                label={profilePageLastName}
                margin="dense"
                variant="outlined"
                type="text"
                {...lastName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                required
                className={`${classes.textField}`}
                label={profilePageNationalCode}
                margin="dense"
                variant="outlined"
                type="number"
                {...nationalCode}
              />
            </Grid>

            <Grid item xs={12} >
              <Typography variant="caption">
                {profilePageBirthday}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
            {language === "FA" ?
              (<MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
                <KeyboardDatePicker
                  clearable
                  margin="dense"
                  variant='dialog'
                  inputVariant="outlined"
                  okLabel={datePickerOkLabel}
                  cancelLabel={datePickerCancelLabel}
                  clearLabel={datePickerClearLabel}
                  labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
                  format="jYYYY/jMM/jDD"
                  classes={{root: classes.datePickerRoot}}
                  { ...jBirthDayDate }
                  
                />
              </MuiPickersUtilsProvider>)
              :
              (<MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  clearable
                  margin="dense"
                  variant='dialog'
                  inputVariant="outlined"
                  label={profilePageBirthday}
                  format="dd/MM/yyyy"
                  classes={{root: classes.datePickerRoot}}
                  { ...birthDayDate }
                />
              </MuiPickersUtilsProvider>)
            }
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <PhoneNumberInput {...phoneNumber} classes={{root: classes.phoneInput}}/>
            </Grid>


            { isInternational ? null :

            <Grid container spacing={1}>

              <Grid item xs={12} >
                <Typography variant="caption">
                  {profilePageAddress}
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12} md={6} lg={2}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={profilePageProvince}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...province}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={2}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={profilePageCity}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...city}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={2}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={profilePageRegion}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...region}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={profilePagePostalCode}
                  margin="dense"
                  variant="outlined"
                  type="number"
                  {...postalCode}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={profilePageMainStreet}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...mainStreet}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={profilePageStreet}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...street}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={4}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={ProfilePageAlley}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...alley}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={2}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={ProfilePagePlaque}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...plaque}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={ProfilePageBlock}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...block}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField
                  required
                  className={`${classes.textField}`}
                  label={ProfilePageApartment}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...apartment}
                />
              </Grid>
            </Grid>
            }

            {!isInternational ? null : 
              <Grid container spacing={1}>
                <Grid item xs={12} >
                  <Typography variant="caption">
                    {profilePageAddress}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    required
                    className={`${classes.textField}`}
                    label={profilePageCountry}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...country}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    required
                    className={`${classes.textField}`}
                    label={profilePageAddress}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...address}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    required
                    className={`${classes.textField}`}
                    label={profilePageCity}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    {...city}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    required
                    className={`${classes.textField}`}
                    label={profilePagePostalCode}
                    margin="dense"
                    variant="outlined"
                    type="number"
                    {...postalCode}
                  />
                </Grid>
              </Grid>

            }

          </Grid>
        </Paper>

        <Grid container justify="center">
          <Button
            variant="outlined"
            color="secondary"
            aria-label="add"
            className={classes.saveButton}
            type="submit"
          >
            {ProfilePageSaveButton}
          </Button>
        </Grid>

      </Grid>
    </Grid>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    marginTop: 10
  },
  checkBoxHolder:{
  },
  paper: {
    paddingBottom: 20,
    padding: 10,
    [theme.breakpoints.down('sm')]:{
      paddingBottom: 10,
    },
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 70,
  },
  avatar: {
    position: 'absolute',
    top: -50,
  },
  textField:{
    width: '100%'
  },
  phoneInput:{
    marginTop: 8
  },
  datePicker:{
    direction:"ltr",
    maxWidth: 310,
  },
  datePickerRoot:{
    width: '100%'
  },
  saveButton:{
    marginTop: 20,
  },
  imageHolder:{
    padding: 20
  }

}));