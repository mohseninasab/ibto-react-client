import { baseConstants } from '../constants';

// #############################################################################
// list of currencies
// #############################################################################

export function donations(state = [], action = {}){
  switch (action.type) {
    
    case baseConstants.ADD_DONATION_SUCCESS:{
      return action.payload;
    }

    case baseConstants.GET_DONATIONS_SUCCESS:{
      return action.payload;
    }

    case baseConstants.UPDATE_DONATION_SUCCESS:{
      return action.payload;
    }

    case baseConstants.DELETE_DONATION_SUCCESS: {
      return action.payload;
    }

    default:
      return state;
  }
}