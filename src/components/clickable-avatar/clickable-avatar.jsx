import React from 'react';
import { strings } from '../../constants';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// #############################################################################
// component
// #############################################################################

export function ClickableAvatar({className = "", onClick}){
  const classes = useStyles();
  const language = useSelector(state => state.language);
  const { clickableAvatarEditLabel } = strings[language].texts;
  
  return (
    <div className={`${classes.root} ${className}`}>
      <Avatar alt="Remy Sharp" src="https://image.flaticon.com/icons/svg/149/149071.svg" className={classes.avatar} />
      <div onClick={onClick} className={classes.editLabel}>{clickableAvatarEditLabel}</div>
    </div>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    borderRadius: 50,
    backgroundColor: theme.palette.backgrounds.white,
    boxShadow: theme.shadows[1],
    transition: 'box-shadow 150ms',
    overflow:"hidden",
    '&:hover': {
      boxShadow: theme.shadows[3],
      cursor: 'pointer',
    },
    '&:hover > div':{
      opacity: 1
    }
  },
  avatar:{
    width: 100,
    height: 100,
    border: 'none',
    backgroundColor: theme.palette.backgrounds.white,
    transition: 'box-shadow 150ms',
    '&:hover': {
      boxShadow: theme.shadows[3],
      cursor: 'pointer',
    }
  },
  editLabel:{
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height:'50%',
    bottom: -20,
    backgroundColor: theme.palette.text.disabled,
    display: 'flex',
    justifyContent: 'center',
    padding: 4,
    color: theme.palette.common.white,
    transition: 'opacity 150ms',
  }
}));