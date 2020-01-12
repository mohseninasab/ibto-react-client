import React from 'react';
import { useSelector } from "react-redux";
import { strings } from '../../constants';
import Avatar from 'react-avatar-edit'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// #############################################################################
// component
// #############################################################################

export function AvatarEditor(props) {
  const { handleSaveImage } = props;
  const classes = useStyles();
  const [newImage, setNewImage] = React.useState(null);
  const language = useSelector(state => state.language);


  const {
    avatarEditDialogSaveButton,
    avatarEditDialogFileInputTitle,
  } = strings[language].texts;

  // ###########################################################################

  const handleSave = () => {
    if (handleSaveImage) {
      handleSaveImage(newImage);
    }
  }

  const onCrop = (image) => {
    setNewImage(image);
  }

  // ###########################################################################
  
  return (
    <div className={classes.root}>

      <div className={classes.imageHolder}>
        <Avatar
          width={256}
          height={256}
          onCrop={onCrop}
          src={newImage}
          label={avatarEditDialogFileInputTitle}
          closeIconColor="orange"
        />
      </div>

      <Button
        variant="outlined"
        color="secondary"
        aria-label="add"
        className={classes.saveButton}
        type="submit"
        onClick={handleSave}
      >
        {avatarEditDialogSaveButton}
      </Button>
    </div>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageHolder:{
    minHeight: 256,
    minWidth: 256,
    marginBottom: 20,
    '& > div > div > label':{
      fontFamily: theme.typography.fontFamily + ' !important',
      color: theme.palette.text.secondary + ' !important',
    },
    '& > div > div': {
      borderColor: theme.palette.text.disabled + ' !important',
      borderRadius: '0px !important'
    }
  }
}));