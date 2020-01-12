import React from 'react';
import { withStyles } from '@material-ui/core';
import { languageAction, themeAction } from '../../actions'
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// #############################################################################
// ant switch
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
        borderColor: theme.palette.primary.main,
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
// component
// #############################################################################

function LanguageSwitch (props){
  const { classes, language = "FA", theme = "LI"} = props;

  // ###########################################################################

  const [showModal, setModal] = React.useState(false);

  // ###########################################################################

  const handleChange = name => event => {
    if(event.target.checked) props.dispatch(languageAction.FA())
    else props.dispatch(languageAction.EN())
  };

  // ###########################################################################

  const handleChangeDarkMode = (name) => (event) => {
    const themeSymbol = event.target.checked ? "LI" : "DR";
    props.dispatch(themeAction.swithTheme(themeSymbol));
  }

  // ###########################################################################

  const show = () => {
    setModal(true);
  }

  // ###########################################################################

  const hide = () => {
    setModal(false);
  }

  // ###########################################################################

  // ###########################################################################

  return (
    <ClickAwayListener onClickAway={hide}>
      <Typography className={`${classes.root} ${ showModal ? classes.showModal : '' }`} component="div">
        <button onMouseOver={show} onClick={show} className={classes.hoverIcon}/>

        <Grid className={classes.label} component="label" container alignItems="center" spacing={1}>
          <Grid item className={classes.switchLabel}>EN</Grid>
          <Grid item>
            <AntSwitch checked={language === 'FA'} onChange={handleChange('language')}/>
          </Grid>
          <Grid item className={classes.switchLabel}>FA</Grid>
        </Grid>

        <Grid className={classes.label} component="label" container alignItems="center" spacing={1}>
          <Grid item className={classes.switchLabel}>DR</Grid>
          <Grid item>
            <AntSwitch checked={theme === "LI"} onChange={handleChangeDarkMode('darkMode')}/>
          </Grid>
          <Grid item className={classes.switchLabel}>LI</Grid>
        </Grid>

      </Typography>
    </ClickAwayListener>
  );
}

// #############################################################################
// styles
// #############################################################################

const styles = theme => ({
  root:{
    position: 'fixed',
    zIndex: 2000,
    padding: '5px 10px',
    background: theme.palette.backgrounds.secondary,
    [theme.direction === "rtl" ? "right" : "left" ]: 5,

    bottom: -70,
    borderRadius: 5,
    boxShadow: '0px 1px 3px 0px #0000006b',
    transition: "bottom 150ms",
    '& > label':{
      flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
    }
  },
  switchLabel:{
    width: 28,
    color: theme.palette.text.primary,
  },
  showModal:{
    bottom: 5,
  },
  hoverIcon: {
    position: 'fixed',
    [theme.direction === "rtl" ? "right" : "left" ]: 0,
    bottom: 0,
    zIndex: 2000,
    width: 25,
    height: 25,
    border: 'none',
    background: '#00000000',
    '&:focus': {
      outline: 'none'
    }
  },
  label: {
    color: '#00313AD1',
    fontSize: 14,
    display: 'flex',
    flexWrap: 'nowrap'
  }
});

// #############################################################################
// map REDUX state to component props
// #############################################################################

const mapSateToProps = state => ({
  language: state.language,
  theme: state.theme,
});

// #############################################################################
// connect to REDUX and MATERIAL STYLES
// #############################################################################

const LanguageSwitchWithStyles = withStyles(styles)(LanguageSwitch)
const LanguageSwitchConnected = connect(mapSateToProps)(LanguageSwitchWithStyles)

// #############################################################################
// export
// #############################################################################

export  { LanguageSwitchConnected as LanguageSwitch };