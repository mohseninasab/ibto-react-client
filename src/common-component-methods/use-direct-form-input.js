import React from "react";

// #############################################################################
// this function will handle the input changes with direct access to the value
// #############################################################################

export function useDirectFormInput(initialValue = ""){
  const [value, setValue] = React.useState(initialValue);
  const onChange = value => setValue(value);
  return  {value, onChange}
}