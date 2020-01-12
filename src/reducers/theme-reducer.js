import { themeConstants } from "../constants";

// #############################################################################
// this reducer will change the theme mode
// #############################################################################

export function theme(state = "LI", action){

  const theme = localStorage.getItem("theme");
  const themeSymble = theme !== null ? theme : 'LI';

  switch (action.type) {

    case themeConstants.THEME_SWITCH_LIGHT:
      changeToLightMode()
      return "LI";

    case themeConstants.THEME_SWITCH_DARK:
      changeToDarkMode()
      return "DR";

    default:
      themeSymble === "LI" ? changeToLightMode() : changeToDarkMode();
      return themeSymble;
  }
}

// #############################################################################
// these two function will save the theme setting in the local storage
// #############################################################################

function changeToLightMode() {
  localStorage.setItem("theme", 'LI');
}
function changeToDarkMode() {
  localStorage.setItem("theme", 'DR');
}