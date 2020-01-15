// #############################################################################
// this function will filter array of objects based on the keys and search query 
// #############################################################################

export const filterArray = (array, keys = [], searchQuery = "") => {
    return array.filter(item => {
      let result = false;
      keys.forEach(key => { result = item[key].toString().toLowerCase().includes(searchQuery.toLowerCase()) || result; });
      return result;
    })
 };