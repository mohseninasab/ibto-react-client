import React from "react"
import SvgGenerator from "components/custom-icons/SvgGenerator";

// #############################################################################
// icon raw data
// #############################################################################

const icon = "M12,9.53a2.66,2.66,0,1,0,2.66,2.66A2.66,2.66,0,0,0,12,9.53Zm0,4.56a1.9,1.9,0,1,1,1.9-1.9h0A1.9,1.9,0,0,1,12,14.09ZM4,8.39h.76V7.63H3.64A.38.38,0,0,0,3.26,8h0V9.15H4Zm0,6.84H3.26v1.14a.38.38,0,0,0,.38.38H4.78V16H4ZM1.74,6.49v11.4a.38.38,0,0,0,.38.38H21.88a.38.38,0,0,0,.38-.38V6.49a.38.38,0,0,0-.38-.38H2.12A.38.38,0,0,0,1.74,6.49Zm.76.38h19V17.51H2.5Zm17.86,3.42A2.28,2.28,0,0,1,18.08,8a.38.38,0,0,0-.38-.38H6.3A.38.38,0,0,0,5.92,8h0a2.28,2.28,0,0,1-2.28,2.28.38.38,0,0,0-.38.38h0v3a.38.38,0,0,0,.38.38h0a2.28,2.28,0,0,1,2.28,2.28.38.38,0,0,0,.38.38H17.7a.38.38,0,0,0,.38-.38h0a2.28,2.28,0,0,1,2.28-2.28.38.38,0,0,0,.38-.38h0v-3a.38.38,0,0,0-.38-.38ZM20,13.35A3,3,0,0,0,17.35,16H6.66A3.06,3.06,0,0,0,4,13.35V11A3.06,3.06,0,0,0,6.66,8.39H17.35A3,3,0,0,0,20,11Zm.38-5.72H19.22v.76H20v.76h.76V8A.38.38,0,0,0,20.36,7.63ZM20,16h-.76v.76h1.14a.38.38,0,0,0,.38-.38h0V15.23H20ZM6.87,3.3,7.25,4a9.48,9.48,0,0,1,8.46-.51l-1.6.8.34.68,2.28-1.14a.38.38,0,0,0,.17-.51h0L15.76,1l-.68.34.65,1.29a10.3,10.3,0,0,0-8.86.67Zm9.88,17.4L16.37,20a9.49,9.49,0,0,1-8.46.51l1.6-.8-.34-.68L6.89,20.21a.38.38,0,0,0-.17.51L7.86,23l.68-.34-.65-1.29a10.3,10.3,0,0,0,8.86-.67Z";

// #############################################################################
// export 
// #############################################################################

export default function _default({classes}){ return(<SvgGenerator classes={classes}>{icon}</SvgGenerator>) };
export const MoneyCircle = ({classes}) => (<SvgGenerator classes={classes}>{icon}</SvgGenerator>);