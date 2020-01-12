import { combineReducers } from 'redux';
import { authConstants } from '../constants';
import { user } from './user-reducer';
import { language } from './language-reducer';
import { theme } from './theme-reducer';
import { staff } from "./staff-reducer";
import { progress } from "./progress-reducer";
import { snackbar } from "./snackbar-reducer";
import { donations } from "./donations-reducer";
import { offices } from "./offices-reducer";


// #############################################################################
// combines all the reducers
// #############################################################################

const appReducer = combineReducers({ 
  user,
  staff,
  language,
  theme,
  progress,
  snackbar,
  donations,
  offices,
});

// #############################################################################
// root reducer
// #############################################################################

const rootReducer = (state, action) => {
  if (action.type === authConstants.USER_LOGOUT_SUCCESS) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    state = undefined;
  }

  return appReducer(state, action)
}

// #############################################################################
// root reducer
// #############################################################################

export default rootReducer;