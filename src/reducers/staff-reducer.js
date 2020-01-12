import { baseConstants } from '../constants';
import { findIndex } from '../common-component-methods';

// #############################################################################
// array of users
// #############################################################################

export function staff(state = [], action = {}){
  switch (action.type) {
    
    case baseConstants.ADD_STAFF_SUCCESS:{
      return [ action.payload, ...state ] ;
    }

    case baseConstants.GET_STAFF_SUCCESS:{
      return action.payload;
    }

    case baseConstants.UPDATE_STAFF_SUCCESS:{
      return action.payload;
    }

    case baseConstants.DELTE_STAFF_SUCCESS:{
      const index = findIndex(state, "_id", action.payload);
      return [ ...state.slice(0, index), ...state.slice(index + 1) ];
    }

    default:
      return state;
  }
}