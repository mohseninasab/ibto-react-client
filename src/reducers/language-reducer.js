
// #############################################################################
// language reducer 
// #############################################################################

export const language = (state = "FA", action) => {

  const language = localStorage.getItem("language");
  const languageSymble = language !== null ? language : 'FA';

  switch (action.type) {

    case "CHANGE_TO_FARSI":
      changeToPersian();
      return 'FA';

    case "CHANGE_TO_ENGLISH":
      changeToEnglish();
      return 'EN';

    default:
      languageSymble === 'EN' ? changeToEnglish() : changeToPersian();
      return languageSymble;
  }
};

// #############################################################################
// these two function will save the language setting in the local storage
// #############################################################################

function changeToEnglish() {
  localStorage.setItem("language", 'EN');
}
function changeToPersian() {
  localStorage.setItem("language", 'FA');
}