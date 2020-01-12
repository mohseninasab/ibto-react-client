import { baseConstants } from '../constants';
import { findIndex } from '../common-component-methods';

// #############################################################################
// list of currencies
// #############################################################################

export function offices(state = [], action = {}){
  switch (action.type) {
    
    case baseConstants.ADD_OFFICE_SUCCESS:{
      return action.payload;
    }

    case baseConstants.GET_OFFICES_SUCCESS:{
      return action.payload;
    }

    case baseConstants.UPDATE_OFFICE_SUCCESS:{
      return action.payload;
    }

    case baseConstants.DELETE_OFFICE_SUCCESS: {
      return action.payload;
    }

    default:
      return state;
  }
}