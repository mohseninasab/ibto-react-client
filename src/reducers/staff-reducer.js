import { baseConstants } from '../constants';

// #############################################################################
// array of users
// #############################################################################

export function staff(state = [], action = {}){
  switch (action.type) {
    
    case baseConstants.ADD_STAFF_SUCCESS:{
      return action.payload;
    }

    case baseConstants.GET_STAFF_SUCCESS:{
      return action.payload;
    }

    case baseConstants.UPDATE_STAFF_SUCCESS:{
      return action.payload;
    }

    case baseConstants.DELETE_STAFF_SUCCESS:{
      return action.payload;
    }

    default:
      return state;
  }
}