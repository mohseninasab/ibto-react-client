import { baseConstants } from "../constants";
import { baseServices } from "../services";
import { progressBarActions } from "./";
import { snackBarActions } from "./";
import { queries } from "../queries";

//##############################################################################
// base actions
//##############################################################################

export const baseActions = {
  donation,
  getDonations,
  updateDonation,
  deleteDonation,

  office,
  getOffices,
  updateOffice,
  deleteOffice,

  subject,
  getSubjects,
  updateSubject,
  deleteSubject,

  staff,
  getStaff,
  updateStaff,
  deleteStaff,

  getUserDonations,
};

//##############################################################################
// 
//##############################################################################

function donation(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.addDonationQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.ADD_DONATION_SUCCESS, payload };
  }
}

//##############################################################################
// this action will get the selected user all its donations
//##############################################################################

function getUserDonations(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.GET(queries.getUserDonationsQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.GET_USER_DONATIONS_SUCCESS, payload };
  }
}


//##############################################################################
// 
//##############################################################################

function getDonations() {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.GET(queries.getDonationQuery()).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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

function updateDonation(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.updateDonationQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.UPDATE_DONATION_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function deleteDonation(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.deleteDonationQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Deleted Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.DELETE_DONATION_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function office(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.addOfficeQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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
    baseServices.GET(queries.getOfficesQuery()).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.updateOfficeQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.DEL(queries.deleteOfficeQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Deleted Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.addSubjectQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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
    baseServices.GET(queries.getSubjectsQuery()).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.updateSubjectQuery()).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
        dispatch(snackBarActions.snackBarError("Connection Error!"));
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
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.DEL(queries.deleteSubjectQuery()).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Deleted Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.DELETE_SUBJECT_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function staff(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.addStaffQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.ADD_STAFF_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function getStaff() {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.GET(queries.getStaffQuery()).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.GET_STAFF_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function updateStaff(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.PUT(queries.updateStaffQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Saved Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.UPDATE_STAFF_SUCCESS, payload };
  }
}

//##############################################################################
// 
//##############################################################################

function deleteStaff(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.DEL(queries.deleteStaffQuery(data)).then(
      response => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("Deleted Successfully"));
        dispatch(success(response));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };
  function success(payload) {
    return { type: baseConstants.DELETE_STAFF_SUCCESS, payload };
  }
}
