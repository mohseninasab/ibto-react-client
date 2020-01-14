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

  subject,
  getSubjects,
  updateSubject,
  deleteSubject

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
    query: `INSERT INTO ibto.offices (name, address, city, phoneNumber) VALUES ("${data.name}", "${data.address}", "${data.city}", "${data.phoneNumber}");`,
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
    query: `UPDATE ibto.offices SET name = "${data.name}" ,address = "${data.address}", city = "${data.city}", phoneNumber = "${data.phoneNumber}" WHERE id = ${data.id} ;`,
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

//##############################################################################
// 
//##############################################################################

function subject(data) {
  const query = {
    query: `INSERT INTO ibto.subjects (firstName, lastName, bloodType, type, address, city, phoneNumber, nationalCode) VALUES ("${data.firstName}", "${data.lastName}", "${data.bloodType}", "${data.type}", "${data.address}", "${data.city}", "${data.phoneNumber}", ${data.nationalCode});`,
    secondQuery: `SELECT * FROM ibto.subjects;`,
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
    return { type: baseConstants.ADD_SUBJECT_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function getSubjects() {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.GET({query: "SELECT * FROM ibto.Subjects;"}).then(
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
    return { type: baseConstants.GET_SUBJECTS_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function updateSubject(data) {
  const query = {
    query: `UPDATE ibto.subjects SET firstName = "${data.firstName}", lastName = "${data.lastName}" , bloodType = "${data.bloodType}", type = "${data.type}", address = "${data.address}", city = "${data.city}", phoneNumber = "${data.phoneNumber}", nationalCode = ${data.nationalCode} WHERE id = ${data.id}`,
    secondQuery: `SELECT * FROM ibto.subjects;`,
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
    return { type: baseConstants.UPDATE_SUBJECT_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function deleteSubject(data) {
  const query = {
    query: `DELETE FROM ibto.subjects WHERE id = ${data.id}`,
    secondQuery: `SELECT * FROM ibto.subjects;`,
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
    return { type: baseConstants.DELETE_SUBJECT_SUCCESS, payload };
  }
}
