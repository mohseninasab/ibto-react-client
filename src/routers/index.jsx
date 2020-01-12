import React, { Suspense } from 'react';
import { history } from '../helpers'
import { Router, Route, Switch } from 'react-router-dom';
import LoadingPage from "../pages/loading-page/loading-page";
import PrivateRoute from "routers/private-route";
import routes from "./routes";

// #############################################################################
// application router
// #############################################################################
 
const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<LoadingPage/>}>
      <Switch>
        {routes.map(({layout:Layout, path, exact, name, children, ...route})=> {
          return !!name ?
          <PrivateRoute
            name={name}
            key={path}
            path={path}
            exact={exact}
          >
          { Layout ? 
            <Route key={path} path={path} exact={exact}>
              <Layout title={route.title} subRoutes={children}/>
            </Route>
            :
            <Route key={route.path} {...route}/>
           }
            
          </PrivateRoute>
          :
          <Route key={path} path={path} exact={exact}>
              <Layout title={route.title} subRoutes={children}/>
          </Route>          
        })}
      </Switch>
    </Suspense>
  </Router>
);

// #############################################################################
// export
// #############################################################################
  
export default AppRouter;
