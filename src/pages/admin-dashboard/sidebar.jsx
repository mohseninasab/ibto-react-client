import React from 'react';
import { strings } from '../../constants';
import { useSelector } from "react-redux";
import { history } from '../../helpers';
import { TopBar } from '../../components/top-bar';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

import FavoriteIcon from "@material-ui/icons/Favorite";

// #############################################################################
// component
// #############################################################################

export function SideBar(props){
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const language = useSelector(state => state.language);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedRoute, setSelectedRoute] = React.useState(history.location.pathname);

  // ###########################################################################

  const {
    adminDashboardSideBarOffices,
    adminDashboardSideBarSubjects,
    adminDashboardSideBarStaff,
    adminDashboardSideBarBloodDonations,
  } = strings[language].texts;

  // ###########################################################################

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ###########################################################################

  const handleRouting = route => () => {
    history.push(route);
    setSelectedRoute(route)
  }

  // ###########################################################################

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List className={classes.list}>
        
        <ListItem
          button
          dense
          className={classes.itemButton}
          onClick={handleRouting("/admin-dashboard/offices")}
          selected={selectedRoute === '/admin-dashboard/offices'}
        >
          <ListItemIcon className={classes.iconColor} ><AccountBalanceIcon/></ListItemIcon>
          <ListItemText className={classes.text} primary={adminDashboardSideBarOffices} />
        </ListItem>

        <ListItem
          button
          dense
          className={classes.itemButton}
          onClick={handleRouting("/admin-dashboard/subjects")}
          selected={selectedRoute === '/admin-dashboard/subjects'}
        >
          <ListItemIcon className={classes.iconColor} ><EmojiPeopleIcon/></ListItemIcon>
          <ListItemText className={classes.text} primary={adminDashboardSideBarSubjects} />
        </ListItem>

        <ListItem
          button
          dense
          className={classes.itemButton}
          onClick={handleRouting("/admin-dashboard/Staff")}
          selected={selectedRoute === '/admin-dashboard/Staff'}
        >
          <ListItemIcon className={classes.iconColor} ><PeopleIcon/></ListItemIcon>
          <ListItemText className={classes.text} primary={adminDashboardSideBarStaff} />
        </ListItem>

        <ListItem
          button
          dense
          className={classes.itemButton}
          onClick={handleRouting("/admin-dashboard/donations")}
          selected={selectedRoute === '/admin-dashboard/donations'}
        >
          <ListItemIcon className={classes.iconColor} ><FavoriteIcon classes={{root: classes.red}}/></ListItemIcon>
          <ListItemText className={classes.text} primary={adminDashboardSideBarBloodDonations} />
        </ListItem>
        
      </List>
    </div>
  );

  // ###########################################################################
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="default" position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <TopBar/>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper}}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}

// #############################################################################
// styles
// #############################################################################

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  red:{
    color: "#FF6B00",
  },
  text:{
    "& > span":{
      fontSize: "0.85rem"  
    }
  },
  toolbar:{
    width: "100%",
    height: 56,
    [theme.breakpoints.down('sm')]: {
      height: 30,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list:{
    color: theme.palette.common.white
  },
  iconColor:{
    color: theme.palette.common.white
  },
  itemButton:{
    minHeight: 45,
  }
}));