import { progressBarConstants } from "../constants";

export function progress(state = false, action){
	switch(action.type){
		case progressBarConstants.PROGRESS_START:
			return true;
		case progressBarConstants.PROGRESS_STOP:
			return false;
		default:
			return false;
	}
}