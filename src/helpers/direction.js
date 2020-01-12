
// #############################################################################
// which direction for the layout
// #############################################################################

export const whichDirection = (strings = {}, language) => {
  return strings[language].isRTL ? 'rtl' : 'ltr';
}