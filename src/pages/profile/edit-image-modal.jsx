import React from 'react';
import { AvatarEditor } from "../../components/avatar-editor";
import { useSelector } from "react-redux";
import { strings } from '../../constants';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// #############################################################################
// component
// #############################################################################

export function EditImageModal(props){
  const { handleClose, open = true, image = "" } = props;

  // ###########################################################################
  const language = useSelector(state => state.language);
  const classes = useStyles();

  // ###########################################################################
  const { avatarEditDialogTitle } = strings[language].texts;

  // ###########################################################################
  
  return (
    <Dialog
      classes={{paper: classes.paper}}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className={classes.title}>{avatarEditDialogTitle}</DialogTitle>
      <DialogContent>
        <AvatarEditor handleSaveImage={props.handleSaveImage} image={image}/>
      </DialogContent>
    </Dialog>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{},
  title:{
    textAlign: 'center',
  }
}));