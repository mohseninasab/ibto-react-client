import { snackBarConstants } from "../constants";

export function snackbar(state = {}, action){
	switch(action.type){
		case snackBarConstants.SNACKBAR_SUCCESS :
			return { open: true, variant: "success", message: action.payload.message };
		case snackBarConstants.SNACKBAR_ERROR :
			return { open: true, variant: "error", message: action.payload.message };
		case snackBarConstants.SNACKBAR_WARNING :
			return { open: true, variant: "warning", message: action.payload.message };
		case snackBarConstants.SNACKBAR_INFO :
			return { open: true, variant: "info", message: action.payload.message };
		case snackBarConstants.SNACKBAR_CLEAR :
			return { ...state, open: false };
		case snackBarConstants.SNACKBAR_CLOSE :
			return { ...state, open: false };
		default:
			return state
	}
}