import React, { PureComponent } from 'react';
import { strings } from '../../constants';

import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import CloseIcon from "@material-ui/icons/Close"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import DoneIcon from "@material-ui/icons/Done";

// #############################################################################
// component
// #############################################################################

class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      confirmName: "",
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      email: props.user.email,
      moblie: props.user.mobile,
      createAt: props.user.createAt,
      lastUpdate: props.user.lastUpdate,
      role: props.user.role,
      active: props.user.active,
      editMode: false,
      deleteMode: false,
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  // ###########################################################################
  // handles the change in the switch
  // ###########################################################################

  handleChangeSwitch = name => event => {
    this.setState({ [name]: event.target.checked });
    const data = {
      _id: this.props.user._id,
      active: event.target.checked,
    };
    this.props.updateUser(data);
  };

  // ###########################################################################
  // handles the change in the switch
  // ###########################################################################


  handleSwitch = (name) => () => {
    this.setState({[name]: !this.state[name]})
  }

  openEditMode = () => {
    this.props.openEditMode(this.props.user)
  }

  // ###########################################################################
  // handle update of the currency
  // ###########################################################################

  handleUpdate = () => {
    const data = {
      _id: this.props.user._id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobile: this.state.moblie,
      active: this.state.active,
    }
    if(this.props.updateUser) this.props.updateUser(data);
    this.setState({editMode: false});
    
  }

  // ###########################################################################
  // handle delete of the currency
  // ###########################################################################

  handleDelete = () => {
    const confirmDelete = this.state.confirmName === this.state.firstName;
    if(this.props.deleteUser && confirmDelete) this.props.deleteUser(this.props.user._id)
  }

  // ###########################################################################
  // render
  // ###########################################################################

  render() {
    const { classes, language } = this.props;
    const confirmDelete = this.state.confirmName === this.state.firstName;
    const {
      CurrencyCancelButton,
      CurrencyDeleteButton,
    } = strings[language].texts;
    return (
      <Grid container className={classes.root}>

        <Grid container alignItems="center" item xs={12} sm={6} md={6} lg={2} className={classes.items}>
           {this.props.user.firstName}
        </Grid>

        <Grid container alignItems="center" item xs={12} sm={6} md={6} lg={2} className={classes.items}>
           {this.props.user.lastName}
        </Grid>

        <Grid container alignItems="center" item xs={12} sm={12} md={12} lg={3} className={classes.items}>
          { this.props.user.email}
        </Grid>

        <Grid container alignItems="center" item xs={12} sm={12} md={4} lg={2} className={classes.items}>
           {this.props.user.moblie} 
        </Grid>

         <Grid container alignItems="center" item xs={12} sm={12} md={4} lg={1} className={classes.items}>
          {this.props.user.role}
        </Grid>

        <Grid container alignItems="center" item xs={12} sm={6} md={1} lg={1} className={classes.items}>
          {this.props.user.active ? <DoneIcon/> : <CloseIcon/>}
        </Grid>

        <Grid container alignItems="center" item xs={12} sm={6} md={1} lg={1} className={classes.items}>
           { this.state.editMode ? 
            <React.Fragment>
              <IconButton onClick={this.handleSwitch("editMode")} className={classes.closeButton} ><CloseIcon/></IconButton>
              <IconButton onClick={this.handleUpdate} className={classes.buttonEdit} ><CheckCircleOutlineIcon/></IconButton>
            </React.Fragment>
           : 
            <React.Fragment>
              <IconButton onClick={this.openEditMode} className={classes.buttonEdit}><EditOutlinedIcon/></IconButton>
              <IconButton onClick={this.handleSwitch("deleteMode")} className={classes.buttonDelete}><DeleteOutlinedIcon/></IconButton>
            </React.Fragment>
          }
        </Grid>

          { !this.state.deleteMode ? null : 
            <Grid justify="center" container className={classes.deleteModal}>
              <input className={`${classes.input} ${classes.deleteInput}`} type="text" name="confirmName" value={this.state.confirmName} onChange={this.handleChange}/>
              <Button onClick={this.handleSwitch("deleteMode")} className={classes.cancelButton}>{CurrencyCancelButton}</Button>
              <Button onClick={this.handleDelete} className={`${classes.deleteButton} ${!confirmDelete ? classes.disableButton : null }`}>{CurrencyDeleteButton}</Button>
            </Grid>
          }
        
      </Grid>
    );
  }
}

// #############################################################################
// styles
// #############################################################################

const styles = theme => ({
  root: {
    position: 'relative',
    borderBottom: `1px solid ${theme.palette.borderColor}`,
    transition: 'background 100ms',
    "&:hover":{
      background: theme.palette.backgrounds.tableRow,
    }
  },
  deleteModal:{
    height: 45,
    position: 'absolute',
    background: '#32494EC9',
    padding: 5,
  },
  input:{
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    padding: 5,
    fontSize: 14,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.borderColor}`,
    transition: "box-shadow 150ms",
    borderRadius: 3,
    "&:focus": {
      outline: 'none',
      borderColor: theme.palette.text.secondary,
      boxShadow: '0 0 0 3px #00B3FF73'
    }
  },
  deleteInput:{
    height: "100%",
    color: "white",
    margin: "0px 5px",
    border: `1px solid #FFFFFF90 !important`, 
    width: "100px !important",
  },
  items: {
    minHeight: 45,
    padding: 5,
    fontSize: 14,
    color: theme.palette.text.secondary,
    "&:hover": {
      cursor: "default",
    },
  },
  buttonsHolder:{
    minHeight: 45,
    padding: 5,
    fontSize: 14,
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonEdit:{
    padding: 4,
    color: "#009062",
  },
  closeButton: {
    padding: 4,
    color: "red",
  },
  buttonDelete:{
    padding: 4,
    color: "red",
  },
  buttonSave:{
    margin: "0px 5px",
    height: 35,
  },
  deleteButton:{
    margin: "0px 5px",
    height: 35,
    color: "white",
    background: "#FF7800",
    "&:hover": {
      background: "#E86F02",
    }
  },
  cancelButton:{
    margin: "0px 5px",
    height: 35,
    color: "white",
    background: "#8E8E8E",
    "&:hover": {
      background: "#848484",
    }
  },
  disableButton:{
    background: "#8E8E8E",
    "&:hover": {
      background: "#848484",
    }
  },
  buttonCancel:{
    margin: "0px 5px",
    height: 35,
  },
});

const UserWithStyles = withStyles(styles)(User)

// #############################################################################
// export
// #############################################################################

export  { UserWithStyles as User };

