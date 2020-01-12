import { baseConstants } from "../constants";
import { baseServices } from "../services";
import { progressBarActions } from "./";
import { snackBarActions } from "./";

//##############################################################################
// base actions
//##############################################################################

export const baseActions = {

  donation,
  getDonations,
  updateDonations,
  deleteDonation,

  office,
  getOffices,
  updateOffice,
  deleteOffice,

};

//##############################################################################
// 
//##############################################################################

function donation(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(data).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.ADD_TRANSACTION_SUCCESS, payload };
  }
}


//##############################################################################
// 
//##############################################################################

function getDonations() {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.GET({query: "SELECT * FROM ibto.offices;"}).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.GET_DONATIONS_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function updateDonations() {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT().then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.GET_USER_TRANSACTION_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function deleteDonation(transactionId) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.DEL(transactionId).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.DELETE_TRANSACTION_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function office(data) {
  const query = {
    query: `INSERT INTO ibto.offices (address, city, phoneNumber) VALUES ("${data.address}", "${data.city}", "${data.phoneNumber}");`,
    secondQuery: `SELECT * FROM ibto.offices;`,
  };
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(query).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.ADD_OFFICE_SUCCESS, payload };
  }
}


//##############################################################################
// 
//##############################################################################

function getOffices() {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.GET({query: "SELECT * FROM ibto.offices;"}).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.GET_OFFICES_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function updateOffice(data) {
  const query = {
    query: `UPDATE ibto.offices SET address = "${data.address}", city = "${data.city}", phoneNumber = "${data.phoneNumber}" WHERE id = ${data.id} ;`,
    secondQuery: `SELECT * FROM ibto.offices;`,
  };
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(query).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.UPDATE_OFFICE_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################
//DELETE FROM customers WHERE address =
function deleteOffice(data) {
  const query = {
    query: `DELETE FROM ibto.offices WHERE id = ${data.id}`,
    secondQuery: `SELECT * FROM ibto.offices;`,
  };
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.DEL(query).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError(error.data.msgEn));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.DELETE_OFFICE_SUCCESS, payload };
  }
}
