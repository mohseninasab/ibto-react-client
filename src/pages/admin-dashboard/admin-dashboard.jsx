import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../../helpers';
import LoadingPage from "../loading-page/loading-page"
import { SideBar } from "./"
import { makeStyles } from '@material-ui/core/styles';


// #############################################################################
// component
// #############################################################################

export default function AdminDashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar/>
      <main className={classes.content}>
        <Router history={history}>
          <Suspense fallback={<LoadingPage/>} >
            <Switch>
              {props.subRoutes.map(({layout:Layout, ...route}) => (
                <Route key={route.path} path={route.path} exact={route.exact}>
                  <Layout title={route.title} mainPath={route.path} subRoutes={route.children}/>
                </Route>
              ))}
            </Switch>
          </Suspense>
        </Router>
      </main>
    </div>
  );
}

// #############################################################################
// component
// #############################################################################

const useStyles = makeStyles(theme => ({
  root: {
    direction: "ltr",
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    paddingTop: 75,
    padding: 10,
    height: '100vh',
    overflow: 'auto',
    backgroundColor:theme.palette.backgrounds.main,
  },
}));
