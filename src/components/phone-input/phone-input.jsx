import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

// #############################################################################
// component
// #############################################################################

export const PhoneNumberInput = props =>  {
  const {
    isValid = true,
    numberType = "MOBILE",
    useMobileFullscreenDropdown = true,
    preferredCountries = ['ir', 'gb', 'fr', 'de', 'us'],
    defaultCountry = 'ir',
    type = "number",
    placeholder
  } = props;

  // styles
  const classes = useStyles();

  const handleChange = (isValid, number, country) => {
    if(props.onChange) props.onChange({isValid, number, country})
  };

  return (
    <div className={`${classes.root} ${!isValid && classes.invalid} ${props.className}`}>
      <IntlTelInput
        placeholder={placeholder}
        autoComplete='off'
        type={type}
        numberType={numberType}
        useMobileFullscreenDropdown={useMobileFullscreenDropdown}
        preferredCountries={preferredCountries}
        defaultCountry={defaultCountry}
        onPhoneNumberChange={handleChange} /> 
    </div>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    fontFamily: theme.typography.fontFamily,
    '& > div':{
      width:'100%',
      minHeight: 40,
      height: 40,
      border: `${theme.darkMode ? '2px' : '1px'} solid ${theme.palette.text.hint}`,
      borderRadius: 4,
      backgroundColor: theme.palette.backgrounds.input,
      boxSizing:'border-box',
      
      transition:"box-shadow 150ms, border 150ms",
      direction: theme.direction
    },
    '&:hover > div': {
      borderColor: theme.palette.text.primary,
    },
    '&:hover div > div > div': {
      [theme.direction === 'ltr' ? "borderRight": "borderLeft"]: `1px solid ${theme.palette.text.primary}`,
    },
    '&:hover div > div > div > div': {
      [theme.direction === 'ltr' ? "borderRight": "borderLeft"]: `0`,
    },
    '& div > div > div:focus': {
      outline: 'none',
      background: '1px solid rgba(0, 0, 0, 0.23)',
    },
     '& > div:focus-within > div > div': {
      [theme.direction === 'ltr' ? "borderRight": "borderLeft"]: `1px solid ${theme.palette.primary.main}`,
    },
    '& > div > div > div': {
      [theme.direction === 'ltr' ? "borderRight": "borderLeft"]: `1px solid ${theme.palette.text.hint}`,
    },
    '& > div > div > ul': {
      width: '100%',
      overflowX: "hidden",
      backgroundColor: theme.palette.backgrounds.secondary + " !important",
    },
    '& > div > div > ul > li': {
      width: '100%',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },

    '& > div  > input':{
      width: '100%',
      minHeight: 40,
      borderRadius: 4,
      border: 0,
      fontSize: 14,
      background: '#00000000',
      color: theme.palette.text.primary,
    },
    '& > div > input:focus': {
      outline: 'none',
    },
    '& > div:focus-within': {
      border: `${theme.darkMode ? '2px' : '1px'} solid ${theme.palette.primary.main}`,
      boxShadow: theme.darkMode ? null : `inset 0 0 0 1px ${theme.palette.primary.main}`
    }
  },
  invalid:{
    '& > div:focus-within': {
      border: `${theme.darkMode ? '2px' : '1px'} solid ${theme.palette.secondary.main}`,
      boxShadow: theme.darkMode ? null : `inset 0 0 0 1px ${theme.palette.secondary.main}`
    },
    '& > div:focus-within > div > div': {
      [theme.direction === 'ltr' ? "borderRight": "borderLeft"]: `1px solid ${theme.palette.secondary.main}`,
    },
  }
}));