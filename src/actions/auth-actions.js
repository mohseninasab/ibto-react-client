import { authConstants } from '../constants';
import { progressBarActions } from "./";
import { history, user } from '../helpers'

//##############################################################################
// exports all the user actions
//##############################################################################

export const authActions = {
  login,
  whoAmI,
  logout,
  saveCurrentPath
}

//##############################################################################
// login action
//##############################################################################

function login(loginInfo) {
  return dispatch => {
    dispatch(progressBarActions.stop());
    if(user) dispatch(success(user))
    if(user) localStorage.setItem("user", JSON.stringify(user));
    history.push('./admin-dashboard/subjects');
  };
  function success(payload) {
    return { type: authConstants.USER_LOGIN_SUCCESS, payload };
  }
}

//##############################################################################
// logout function
//##############################################################################

function logout() {
  history.push("/login")
  return dispatch => {
    dispatch({ type: authConstants.USER_LOGOUT_SUCCESS})
  };
}

//##############################################################################
// login action
//##############################################################################

function whoAmI(loginInfo) {
  return dispatch => {
    dispatch({ type: authConstants.GET_USER_INFO_SUCCESS, payload: JSON.parse(localStorage.getItem("user"))})
  };
}

//##############################################################################
// will save the current path
//##############################################################################

function saveCurrentPath(path) {
    return {type: authConstants.SAVE_CURRENT_PATH, payload: path}
}