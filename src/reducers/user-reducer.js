import { authConstants } from '../constants';

// #############################################################################
// this reducer will store the user information in the user object
// #############################################################################

export function user(state = {}, action = {}){
  switch (action.type) {
    
    case authConstants.USER_LOGIN_SUCCESS:{
      return {...state, loggedIn: true, ...action.payload };
    }

    case authConstants.GET_USER_INFO_SUCCESS:
      return {...state, loggedIn: true, ...action.payload };

    case authConstants.USER_LOGIN_FAILURE:
      return {...state, loggedIn: false, msg: action.payload };

    case authConstants.SAVE_CURRENT_PATH:
      return {...state, path: action.payload.path };

    default:{
      return {...state, ...getLocalStorage()};
    } 
  }
}

// #############################################################################
// this function find the user information from the local storage
// #############################################################################

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("user")) 
}

