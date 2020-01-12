// #############################################################################
// this function will parse date and return a date string
// #############################################################################
export function parseDate(dateString = new Date()){
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}