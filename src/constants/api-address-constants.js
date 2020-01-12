// Decide automatically between production, development and test
export let API =  process.env.REACT_APP_API_ADDRESS ? process.env.REACT_APP_API_ADDRESS : process.env.REACT_APP_ENVIRONMENT === `production` ? "" : "http://localhost:5005";

// #############################################################################
//
// #############################################################################
export const TIMEOUT_DELAY = 20000; 

// #############################################################################
// this global variable contains login token and some other thing
// #############################################################################

export const realTimeVariables = {
  token: null
}