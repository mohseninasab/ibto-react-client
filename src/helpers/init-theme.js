// #############################################################################
// this function will initialize the theme  
// #############################################################################

export const initializeTheme = (theme, direction, fontFamily) => {
  return {
    ...theme, 
    direction,
    typography: {
      ...theme.typography,
      fontFamily,
      h1: {...theme.typography.h1, fontFamily},
      h2: {...theme.typography.h2, fontFamily},
      h3: {...theme.typography.h3, fontFamily},
      h4: {...theme.typography.h4, fontFamily},
      h5: {...theme.typography.h5, fontFamily},
      h6: {...theme.typography.h6, fontFamily},
      body1:   {...theme.typography.body1, fontFamily},
      body2:   {...theme.typography.body1, fontFamily},
      button:  {...theme.typography.button, fontFamily},
      caption: {...theme.typography.caption, fontFamily},
      overline:  {...theme.typography.overline, fontFamily},
      subtitle1: {...theme.typography.subtitle1, fontFamily},
      subtitle2: {...theme.typography.subtitle2, fontFamily},
    }
  }
}