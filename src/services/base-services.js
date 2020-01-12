import axios from "axios";
import { API } from "../constants";

//##############################################################################
// log in request
//##############################################################################

export const baseServices = {
  PUT,
  GET,
  DEL,
};

//##############################################################################
// add new transaction
//##############################################################################

function PUT(data) {
  return axios({
    url: `${API}/api`,
    method: "PUT",
    data
  })
    .then(response => {
      return response.data;
    })
    .catch(function(err) {
      return Promise.reject(err.response);
    });
}

//##############################################################################
// get the selected user account book
//##############################################################################

function GET(data) {
  return axios({
    url: `${API}/api`,
    method: "POST",
    data
  })
    .then(response => {
      return response.data;
    })
    .catch(function(err) {
      return Promise.reject(err.response);
    });
}

//##############################################################################
// delete the selected transaction
//##############################################################################

function DEL(data) {
  return axios({
    url: `${API}/api`,
    method: "PUT",
    data
  })
    .then(response => {
      return response.data;
    })
    .catch(function(err) {
      return Promise.reject(err.response);
    });
}
