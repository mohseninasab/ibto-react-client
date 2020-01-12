import { progressBarConstants } from '../constants'

export const progressBarActions = {
  start,
  stop
};

function start(){
    return ({type: progressBarConstants.PROGRESS_START})
}

function stop(){
    return ({type: progressBarConstants.PROGRESS_STOP})
}