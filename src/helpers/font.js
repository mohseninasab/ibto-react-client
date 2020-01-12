
// #############################################################################
// this function will check which font should be use for the Application
// #############################################################################

export const whichFont = (language) => {
  switch(language){
    case "FA":
     return `"Shabnam FD", "Roboto", "Helvetica", "Arial", sans-serif`;
    case "EN":
      return `"Roboto Mono", "Helvetica", "Arial", sans-serif`;
    default: 
      return `"Shabnam FD", "Roboto", "Helvetica", "Arial", sans-serif`;
  }
}