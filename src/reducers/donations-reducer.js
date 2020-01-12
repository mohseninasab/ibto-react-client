import { baseConstants } from '../constants';
import { findIndex } from '../common-component-methods';

// #############################################################################
// list of currencies
// #############################################################################

export function donations(state = [], action = {}){
  switch (action.type) {
    
    case baseConstants.ADD_DONATION_SUCCESS:{
      return [ action.payload, ...state ] ;
    }

    case baseConstants.GET_DONATIONS_SUCCESS:{
      return action.payload;
    }

    case baseConstants.UPDATE_DONATION_SUCCESS:{
      return action.payload;
    }

    case baseConstants.DELETE_DONATION_SUCCESS: {
      const index = findIndex(state, "_id", action.payload);
      return [ ...state.slice(0, index), ...state.slice(index + 1) ];
    }

    default:
      return state;
  }
}