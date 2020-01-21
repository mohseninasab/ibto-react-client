import { baseConstants } from '../constants';

// #############################################################################
// list of currencies
// #############################################################################

export function userDonations(state = [], action = {}){
  switch (action.type) {
    
    case baseConstants.GET_USER_DONATIONS_SUCCESS:{
      return action.payload;
    }

    default:
      return state;
  }
}