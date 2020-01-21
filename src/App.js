import React from 'react';
import { useSelector } from "react-redux";
import { Progress } from "./components/progress";
import { MainSnackbar } from "./components/snackbar"

// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { getTheme } from "./styles";
import AppRouter from "./routers";
import { LanguageSwitch } from './components/language-switch';
import { strings } from './constants';

import { RTL, whichFont, whichDirection, initFontAwesomeIcons } from './helpers';
import { initializeTheme } from './helpers';


// impord the fonts for the farsi language
import "./font/index.css";
import "./index.css";

// #############################################################################
// the root component of the application
// #############################################################################
const App = props => {
  const themeSymbol = useSelector(state => state.theme)
  const language = useSelector(state => state.language);
  const direction = whichDirection(strings, language);
  const fontFamily = whichFont(language);

  // const isSystemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = getTheme(themeSymbol);

  initFontAwesomeIcons();
  
  
  return (
    <MuiThemeProvider theme={initializeTheme(theme, direction, fontFamily)} >
      <RTL>
        <Progress/>
        <AppRouter/>
        <LanguageSwitch/>
        <MainSnackbar/>
      </RTL>
    </MuiThemeProvider>
  );
};

// #############################################################################
// export
// #############################################################################

export default App;
