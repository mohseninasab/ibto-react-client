import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';

// #############################################################################
//
// #############################################################################

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// #############################################################################
// this function will flip the component
// #############################################################################

export const RTL = ({children}) => {
  return (
    <StylesProvider jss={jss}>
      {children}
    </StylesProvider>
  );
}

// #############################################################################
//
// #############################################################################