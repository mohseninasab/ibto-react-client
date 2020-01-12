import React from "react"
import SvgGenerator from "components/custom-icons/SvgGenerator";

// #############################################################################
// icon raw data
// #############################################################################

const icon = "M10.48,1.11l.36.65a3.62,3.62,0,0,1,4.31,0l.36-.65A4.16,4.16,0,0,0,10.48,1.11ZM9,5.65H8.33a6.05,6.05,0,0,0,.36,2.07l.62-.3A5.12,5.12,0,0,1,9,5.65Zm5.54,4.26a3.45,3.45,0,0,1-1.54.36V11a4,4,0,0,0,1.8-.42ZM17,5.65a5.41,5.41,0,0,1-.3,1.78l.61.3a6.15,6.15,0,0,0,.36-2.08ZM13,1.8A3.62,3.62,0,0,0,9.67,5.65a3.37,3.37,0,1,0,6.67,1,3.09,3.09,0,0,0,0-1A3.62,3.62,0,0,0,13,1.8Zm0,6.93a2.91,2.91,0,0,1-2.67-3.08,2.7,2.7,0,1,1,5.34-.82,2.82,2.82,0,0,1,0,.82A2.91,2.91,0,0,1,13,8.73Zm8.91,7.42-1.1-1.26,1.1-1.27a.44.44,0,0,0,0-.55l-4.34-5A.3.3,0,0,0,17.15,8s0,0,0,.05L12.83,13,8.23,7.69a.3.3,0,0,0-.42-.05l0,.05-4.34,5a.42.42,0,0,0,0,.54L5.86,16H2v.77H6.33a.31.31,0,0,0,.13,0l2.27-1.12h4.94V17.2H10a.35.35,0,0,0-.33.38.39.39,0,0,0,.19.35l4.34,2.31a.3.3,0,0,0,.33,0l5.78-4.81.88,1L14.54,23H12.73L6.44,20.3a.23.23,0,0,0-.11,0H2V21H6.27l6.28,2.67a.27.27,0,0,0,.12,0h2a.28.28,0,0,0,.21-.1l7-6.92a.44.44,0,0,0,0-.55ZM8.66,14.88a.22.22,0,0,0-.13,0l-.08,0a1.6,1.6,0,0,1,1.94-1.16,1.17,1.17,0,0,1,.2.06,1.81,1.81,0,0,1,.93,1Zm3.57,0A2.39,2.39,0,0,0,10,13a2.5,2.5,0,0,0-2.32,2.38l-1,.51L4.12,13,8,8.5l5.54,6.39Zm2.07,4.56L11.52,18H14a.36.36,0,0,0,.34-.38V15.81l1.81,2.09Zm.07-4.68a1.55,1.55,0,0,1,1.47-1.41,1.63,1.63,0,0,1,1.5,1.72,1.7,1.7,0,0,1-1.23,1.7Zm2.28,2.64a2.45,2.45,0,0,0,.38-.24l-.34.29Zm3.47-2.81L17.18,17a2.77,2.77,0,0,0,.35-3.52,2,2,0,0,0-2.73-.64,2.43,2.43,0,0,0-.32.24,2.61,2.61,0,0,0-.66,1l-.52-.6,4-4.65,3.86,4.46Z";

// #############################################################################
// export 
// #############################################################################

export default function _default({classes}){ return(<SvgGenerator classes={classes} >{icon}</SvgGenerator>) }
export const MoneyInHand = ({classes}) => (<SvgGenerator classes={classes} >{icon}</SvgGenerator>)