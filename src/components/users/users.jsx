import React, { PureComponent } from 'react';
import { User } from "./user";
import { strings } from '../../constants';
import { EditForm } from "./edit-form";

import { withStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"



// #############################################################################
// component
// #############################################################################

class UsersTable extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      selectedUser: {},
      editMode: false,
    }
  }

  // ###########################################################################
  // close user edit modal
  // ###########################################################################

  closeEditMode = () => {
    this.setState({editMode: false});
  }

  // ###########################################################################
  // update user
  // ###########################################################################

  updateUser = (data) => {
    this.setState({editMode: false, selectedUser: {}})
    this.props.updateUser(data);
  }

  // ###########################################################################
  // open user edit modal
  // ###########################################################################

  openEditMode = (selectedUser) => {
    this.setState({editMode: true, selectedUser});
  }

  // ###########################################################################
  // render
  // ###########################################################################

  render() {
  const { classes, users = [], language = "EN" } = this.props;
  const {
    usersTableFirstName,
    usersTableLastName,
    usersTableEmail,
    usersTablePhoneNumber,
    usersTableActive,
    usersTableRole,
    usersTableNoData,
  } = strings[language].texts;

  if(users.length !== 0)
    return (
      <Grid container direction="column">

        {this.state.editMode && 
          <EditForm
            update={this.updateUser}
            closeEditMode={this.closeEditMode}
            showForm={this.state.editMode}
            user={this.state.selectedUser}
          />
        }

        <Grid container className={classes.header}>
          <Grid item xs={12} sm={6} md={6} lg={2} className={classes.items}>{usersTableFirstName}</Grid>
          <Grid item xs={12} sm={6} md={6} lg={2} className={classes.items}>{usersTableLastName}</Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} className={classes.items}>{usersTableEmail}</Grid>
          <Grid item xs={12} sm={12} md={4} lg={2} className={classes.items}>{usersTablePhoneNumber}</Grid>
          <Grid item xs={12} sm={6} md={4} lg={1} className={classes.items}>{usersTableRole}</Grid>
          <Grid item xs={12} sm={6} md={4} lg={1} className={classes.items}>{usersTableActive}</Grid>
          <Grid item xs={12} sm={6} md={4} lg={1} className={classes.items}></Grid>
        </Grid>

        {users.map(user => (
          <User
            openEditMode={this.openEditMode}
            language={language}
            key={user._id}
            user={user}
            deleteUser={this.props.deleteUser}
            updateUser={this.props.updateUser}
          />
        ))}
      </Grid>
    )
  else return(<Typography variant="h6" align="center" className={classes.noDate} >{usersTableNoData}</Typography>)
  }
}

// #############################################################################
// styles
// #############################################################################

const styles = theme => ({
  root:{},
  items:{
    padding: '2px 5px',
    color: theme.palette.text.primary,
  },
  header:{
    borderBottom: `2px solid ${theme.palette.borderColor}`,
    [theme.breakpoints.down("md")]:{
      display: "none"
    }
  }
});

const UsersTableWithStyles = withStyles(styles)(UsersTable)

// #############################################################################
// export
// #############################################################################

export  { UsersTableWithStyles as UsersTable };

