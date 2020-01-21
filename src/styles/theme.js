import { createMuiTheme } from "@material-ui/core/styles";

//############################################################################
// returns the theme based on the system schema
//############################################################################

export const getTheme = (theme = "LI") => {
  return theme === "LI" ? LightTheme : darkTheme;
};

const isRtl = localStorage.getItem("language") === "FA";
//############################################################################
// Light Mode
//############################################################################

const LightTheme = createMuiTheme({
  darkMode: false,
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily: '"Shabnam FD", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400
  },
  palette: {
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)"
    },
    borderColor: "rgba(0, 0, 0, 0.20)",
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      light: "#4DA5FF",
      main: "#198BFF",
      dark: "#167CE3",
      contrastText: "#fff"
    },
    secondary: {
      light: "#FF9C49",
      main: "#FF7500",
      dark: "#ea6c00",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    backgrounds: {
      primary: "white",
      secondary: "#F8F9FD",
      input: "rgba(255, 255, 255, 0)",
      tableRow: "rgba(0, 0, 0, 0.05)",
      main: "#F9FAFF"
    },
    progressBar: {
      root: "#00000000",
      progress: "#ea6c00"
    },
    card: {
      backgroundActive:
        "repeating-linear-gradient(45deg, transparent, transparent 4px, #00000010 4px, #00000010 8px), linear-gradient(90deg, rgba(0,136,255,1) 0%, rgba(0,82,199,1) 100%)",
      backgroundDeactive:
        "repeating-linear-gradient(45deg, transparent, transparent 4px, #00000010 4px, #00000010 8px), linear-gradient(90deg, rgb(255, 119, 78) 0%, rgb(208, 157, 114) 100%)",
      backgroundNotExist:
        "repeating-linear-gradient(45deg, transparent, transparent 4px, #00000010 4px, #00000010 8px), linear-gradient(90deg, rgb(222, 222, 222) 0%, rgb(193, 193, 193) 100%)",

      border: "1px solid #00000000",

      CodeColorActive: "#ffe892",
      CodeColorDeactive: "#00000060",
      CodeColorNotExist: "#00000040",

      activeTextDate: "#FFFFFF",
      deactiveTextDate: "#00000060"
    },
    table: {
      borderColor: "#00000000"
    },
    cardHeader: {
      borderColor: "rgb(255, 255, 255, 0)",
      backgroundColor: "#5912E9",
      balanceColor: "#5912E9",
    },
    snackbar:{
      border: "1px solid #FFFFFF00",
      success: "rgba(65, 255, 167)",
      error: "rgba(255, 74, 65)",
      info: "rgba(255, 214, 65)",
      warning: "rgba(65, 220, 255)",
    }
  },
  // ###########################################################################
  // over rides
  // ###########################################################################
  overrides: {
    MuiButton: {
      root: {
        fontSize: "0.75rem",
        padding: "5px 15px",
        height: "fit-content",
      },
      label: {
        fontWeight: 600
      },
      contained: {
        boxShadow: "none",
        borderRadius: 4,
        border: "1px solid rgba(0, 0, 0, 0.05)",
        "&:hover": {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        }
      }
    },
    MuiTextField: {
      root: {
        direction: "ltr"
      }
    },

    MuiInputBase:{
      input:{
        "&:-webkit-autofill":{
          backgroundColor: "transparent",
          fontStyle: "italic",
          fontWeight: 900,
          "-webkit-text-fill-color": "#048CC4",
          "-webkit-box-shadow": "0 0 0px 1000px #FFFFFF inset",
        }
      }
    },

    // #########################################################################

    MuiIconButton: {
      root: {
        padding: 8,
        color: "rgba(0, 0, 0, 0.54)"
      }
    },

    // #########################################################################

    MuiDrawer: {
      paper: {
        backgroundColor: "#0E69E0"
      }
    },

    // #########################################################################

    MuiAppBar: {
      root: {
        boxShadow:
          "0px 0px 5px -1px rgba(0,0,0,0.2), 0px -1px 5px 0px rgba(0,0,0,0.14), 0px 0px 5px 0px rgba(0,0,0,0.12)"
      },
      colorDefault: {
        backgroundColor: "#FFF"
      }
    },

    // #########################################################################

    paperAnchorLeft: {
      right: 0,
      left: "auto"
    },
    MuiListItemIcon: {
      root: {
        minWidth: 45
      }
    },

    // #########################################################################
    MuiAvatar: {
      root: {
        padding: 4
      }
    },

    // #########################################################################

    MuiPaper: {
      root: {
        width: "100%",
        backgroundColor: "#FFF"
      },
      elevation8: {
        boxShadow:
          "0px 2px 3px -5px rgba(0,0,0,0.2), 0px 0px 9px 1px rgba(0,0,0,0.14), 0px 1px 5px 2px rgba(0,0,0,0.12)"
      }
    },

    // #########################################################################

    MuiPickersModal: {
      dialogRoot: {
        maxWidth: "310px !important"
      }
    },

    // #########################################################################

    MuiPickersBasePicker: {
      pickerView: {
        direction: "ltr"
      }
    },

    // #########################################################################

    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(0, 29, 45, 0.67)"
      }
    },

    // #########################################################################

    MuiPopover: {
      paper: {
        width: "auto",
        minWidth: 120
      }
    },

    // #########################################################################

    MuiDialog: {
      paper: {
        "@media (max-width: 600px)": {
          borderRadius: 0,
          margin: 0,
          maxHeight: "100vh !important"
        }
      }
    },

    // #########################################################################

    MuiGrid: {
      container: {
        direction: "ltr"
      }
    },
    MuiOutlinedInput: {
      inputSelect: {
        width: "100%"
      },
      input: {
        direction: isRtl ? "right" : "left",
        padding: "8px 14px",
        "&::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0
        },
        "&::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0
        }
      }
    },
    MuiInputLabel: {
      outlined: {
        backgroundColor: "transparent"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%"
      }
    },
    MuiSelect: {
      outlined: {
        padding: "10.5px 14px",
        direction: isRtl ? "right" : "left"
      }
    },
    MuiPickersCalendarHeader:{
      iconButton:{
        backgroundColor: "#00000000",
        margin: "0px 5px",
      }
    },
    makeStyles: {
      backgroundColor: "red",
      input: {
        backgroundColor: "red"
      }
    }
  }
});

//############################################################################
// Dark Mode
//############################################################################

const darkTheme = createMuiTheme({
  darkMode: true,
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily: '"Shabnam FD", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400
  },
  palette: {
    text: {
      disabled: "rgba(255, 255, 255, 0.48)",
      hint: "rgba(255, 255, 255, 0.48)",
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.64)"
    },
    borderColor: "rgba(255, 255, 255, 0.30)",
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      light: "rgba(101, 197, 255, 0.6)",
      main: "rgba(65, 184, 255, 0.6)",
      dark: "rgba(53, 152, 212, 0.6)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgb(255, 201, 100, 0.6)",
      main: "rgb(255, 166, 0, 0.6)",
      dark: "rgb(255, 119, 0, 0.6)",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    backgrounds: {
      primary: "rgb(21, 32, 43)",
      secondary: "rgb(25, 39, 52)",
      input: "rgba(255, 255, 255, 0.03)",
      tableRow: "rgba(255, 255, 255, 0.1)",
      main: "rgb(21, 32, 43)"
    },
    progressBar: {
      root: "#00000000",
      progress: "#FFB86CCF"
    },
    card: {
      backgroundActive:
        "repeating-linear-gradient(45deg, transparent, transparent 4px, #00000010 4px, #00000010 8px), linear-gradient(90deg, rgba(0, 136, 255, 0.72) 0%, rgba(0, 82, 199, 0.78) 100%)",
      backgroundDeactive:
        "repeating-linear-gradient(45deg, transparent, transparent 4px, #00000010 4px, #00000010 8px), linear-gradient(90deg, rgba(255, 119, 78, 0.77) 0%, rgba(208, 157, 114, 0.77) 100%)",
      backgroundNotExist:
        "repeating-linear-gradient(45deg, transparent, transparent 4px, #00000010 4px, #00000010 8px), linear-gradient(90deg, rgba(222, 222, 222, 0.56) 0%, rgba(193, 193, 193, 0.76) 100%)",

      border: "1px solid #FFFFFF10",

      CodeColorActive: "#ffe892",
      CodeColorDeactive: "#00000060",
      CodeColorNotExist: "#00000040",

      activeTextDate: "#FFFFFF",
      deactiveTextDate: "#00000060"
    },
    table: {
      borderColor: "rgba(255, 255, 255, 0.10)"
    },
    cardHeader: {
      borderColor: "rgb(56, 68, 77)",
      backgroundColor: "rgba(147, 94, 255, 0.23)",
      balanceColor: "rgba(147, 117, 208, 0.6)",
    },
    snackbar:{
      border: "1px solid #FFFFFF60",
      success: "rgb(0, 165, 89)",
      error: "rgb(149, 7, 0)",
      info: "rgb(161, 126, 0)",
      warning: "rgb(0, 148, 182)",
    }
  },

  // ###########################################################################
  // over rides
  // ###########################################################################

  overrides: {
    MuiButton: {
      root: {
        fontSize: "0.75rem",
        padding: "5px 15px",
        height: "fit-content",
      },
      label: {
        fontWeight: 600
      },
      outlined: {
        border: "1px solid rgba(255, 255, 255, 0.24)",
        "&$disabled": {
          color: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.15)"
        }
      },
      contained: {
        boxShadow: "none",
        borderRadius: 4,
        border: "1px solid #ffffff52",
        "&:hover": {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        "&$disabled": {
          color: "rgba(255, 255, 255, 0.26)"
        }
      }
    },
    MuiTextField: {
      root: {
        direction: "ltr",
      }
    },
    MuiInputBase:{
      input:{
        "&:-webkit-autofill":{
          backgroundColor: "transparent",
          fontStyle: "italic",
          fontWeight: 900,
          "-webkit-text-fill-color": "#048CC4",
          "-webkit-box-shadow": "0 0 0px 1000px #15202B inset",
        }
      }
    },

    // #####[ icon button override ]############################################

    MuiIconButton: {
      root: {
        padding: 8,
        color: "rgba(255, 240, 218, 0.81)"
      }
    },

    // #####[ Drawer override ]#################################################

    MuiDrawer: {
      paper: {
        border: "none",
        backgroundColor: "rgb(16, 24, 33)",
        borderRight: "1px solid rgb(56, 68, 77) !important"
      }
    },

    // #####[ application bar overrides ]#######################################

    MuiAppBar: {
      root: {
        border: "none",
        borderBottom: "1px solid rgb(56, 68, 77) !important",
        boxShadow: "none"
      },
      colorDefault: {
        backgroundColor: "rgb(21, 32, 43)"
      }
    },

    // #####[ overrides ]#######################################################

    paperAnchorLeft: {
      right: 0,
      left: "auto"
    },

    // #####[ avatar overrides ]################################################

    MuiAvatar: {
      root: {
        padding: 4
      }
    },

    // #####[ card overrides ]##################################################

    MuiPaper: {
      root: {
        width: "100%",
        backgroundColor: "rgb(25, 39, 52)",
        border: "1px solid rgb(56, 68, 77)"
      },
      elevation8: {
        boxShadow:
          "0px 2px 3px -5px rgba(0,0,0,0.2), 0px 0px 9px 1px rgba(0,0,0,0.14), 0px 1px 5px 2px rgba(0,0,0,0.12)"
      }
    },

    // #####[ date picker overrides ]###########################################

    MuiPickersModal: {
      dialogRoot: {
        maxWidth: "310px !important"
      }
    },

    MuiPickersBasePicker: {
      pickerView: {
        direction: "ltr"
      }
    },

    // #####[ back drop overrides ]#############################################

    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(0, 29, 45, 0.67)"
      }
    },
    // #####[ input overrides ]#################################################
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "rgba(255, 255, 255, 0.30)",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderWidth: 2,
        borderRadius: 5
      },
      inputSelect: {
        width: "100%"
      },
      input: {
        direction: isRtl ? "right" : "left",
        padding: "8px 14px",
        "&::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0
        },
        "&::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0
        }
      }
    },

    // #####[ popover menu override ]###########################################

    MuiPopover: {
      paper: {
        width: "auto",
        minWidth: 120
      }
    },

    // #####[ dialog over ride in mobile size ]#################################

    MuiDialog: {
      paper: {
        "@media (max-width: 600px)": {
          borderRadius: 0,
          margin: 0,
          maxHeight: "100vh !important"
        }
      }
    },

    // #####[ Grid over ride ]##################################################

    MuiGrid: {
      container: {
        direction: "ltr"
      }
    },

    // #####[ Chip override ]###################################################

    MuiChip: {
      outlined: {
        border: "1px solid rgba(255, 255, 255, 0.45)"
      },
      label: {
        color: "rgba(255, 255, 255, 0.45)"
      }
    },

    // #####[ list item over ride ]#############################################

    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "rgba(255, 255, 255, 0.08)"
        }
      },
      button: {
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05) !important"
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 45
      }
    },
    MuiSelect: {
      outlined: {
        padding: "10.5px 14px",
        direction: isRtl ? "right" : "left"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%"
      }
    },
    MuiPickersCalendarHeader:{
      iconButton:{
        backgroundColor: "#00000000",
        margin: "0px 5px",
      }
    },
  }
});
