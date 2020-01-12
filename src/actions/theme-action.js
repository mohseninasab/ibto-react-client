
import { themeConstants } from '../constants';

// #############################################################################
// this object will exports all the actions
// #############################################################################

export const themeAction = { swithTheme };

// #############################################################################
// this function will 
// #############################################################################

function swithTheme(theme) {
 switch(theme) {
 	case "LI":
 		return { type: themeConstants.THEME_SWITCH_LIGHT};
 	case "DR":
 		return { type: themeConstants.THEME_SWITCH_DARK};
 	default: 
 		return { type: themeConstants.THEME_SWITCH_LIGTH};
 }
}

