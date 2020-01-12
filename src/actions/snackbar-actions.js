import { snackBarConstants } from "../constants";

export const snackBarActions = {
  snackBarSuccess,
  snackBarError,
  snackBarClear,
  snackBarClose,
  snackBarWarning,
  snackBarInfo
};

function snackBarSuccess(message, options) {
  return { type: snackBarConstants.SNACKBAR_SUCCESS, payload: { ...options, message } };
}
function snackBarError(message, options) {
  return { type: snackBarConstants.SNACKBAR_ERROR, payload: { ...options, message } };
}
function snackBarWarning(message, options) {
  return { type: snackBarConstants.SNACKBAR_WARNING, payload: { ...options, message } };
}
function snackBarInfo(message, options) {
  return { type: snackBarConstants.SNACKBAR_INFO, payload: { ...options, message } };
}
function snackBarClear() {
  return { type: snackBarConstants.SNACKBAR_CLEAR};
}
function snackBarClose() {
  return { type: snackBarConstants.SNACKBAR_CLOSE};
}
