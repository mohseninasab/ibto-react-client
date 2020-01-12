// #############################################################################
//  find the index of searched item in the array
// #############################################################################

export function findIndex(array, key, searchKey) {
  return array.findIndex(item => item[key] === searchKey[key]);
}