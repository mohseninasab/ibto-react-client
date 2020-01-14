import { baseConstants } from '../constants';

// #############################################################################
// list of currencies
// #############################################################################

export function subjects(state = [], action = {}){
  switch (action.type) {
    
    case baseConstants.ADD_SUBJECT_SUCCESS:{
      return action.payload;
    }

    case baseConstants.GET_SUBJECTS_SUCCESS:{
      return action.payload;
    }

    case baseConstants.UPDATE_SUBJECT_SUCCESS:{
      return action.payload;
    }

    case baseConstants.DELETE_SUBJECT_SUCCESS:{
      return action.payload;
    }

    default:
      return state;
  }
}