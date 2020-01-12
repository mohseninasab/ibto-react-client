import React from "react";

// #############################################################################
// this function will handle input changes
// #############################################################################

export function useFormInput(initialValue = ""){
  const [value, setValue] = React.useState(initialValue);
  const onChange = event => setValue(event.target.value);
  return  {value, onChange}
}