import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunkMiddleware];

export default () => {
  return process.env.REACT_APP_ENVIRONMENT === `production` ? createStore(rootReducer, applyMiddleware(...middleware)) : 
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
};