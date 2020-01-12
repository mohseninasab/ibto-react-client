
import React from "react"
import SvgGenerator from "components/custom-icons/SvgGenerator";

// #############################################################################
// icon raw data
// #############################################################################

const icon = "M8.8,17.66a.38.38,0,0,0,.47.28.8.8,0,0,1,1,.58.38.38,0,0,0,.47.28l9.88-2.42a.38.38,0,0,0,.28-.47h0a.8.8,0,0,1,.58-.95.39.39,0,0,0,.28-.47h0l-.74-3a.39.39,0,0,0-.48-.28h0a.78.78,0,0,1-.94-.58.38.38,0,0,0-.47-.28h0L9.2,12.73a.39.39,0,0,0-.29.47.78.78,0,0,1-.57,1,.39.39,0,0,0-.29.47h0Zm7-1-.1-.41A1.17,1.17,0,0,0,16,14.66a1.16,1.16,0,0,0-1.24-.48.39.39,0,1,1,.29-.48h0a.39.39,0,0,0,.47.29h0c.63-.15.18-1.26-.73-1.36l-.1-.4a2.27,2.27,0,0,1,2.06,1.86,2.27,2.27,0,0,1-1,2.6Zm-2.65-3.45a1.84,1.84,0,0,1,.8-.83l.09.4A1.17,1.17,0,0,0,15,14.94a.38.38,0,0,1,.47.28.41.41,0,0,1-.29.48.39.39,0,0,1-.47-.29h0a.39.39,0,0,0-.47-.29h0c-.64.16-.18,1.27.73,1.36l.1.4c-1.58,0-2.67-2.09-1.89-3.63ZM20.29,12l.58,2.38a1.57,1.57,0,0,0-.82,1.36l-2.86.7a3.41,3.41,0,0,0-1.11-4.56l2.85-.7a1.57,1.57,0,0,0,1.36.82ZM9.72,13.4l2.85-.7a3.42,3.42,0,0,0,1.12,4.56l-2.85.7a1.57,1.57,0,0,0-1.36-.82L8.9,14.76a1.57,1.57,0,0,0,.82-1.36ZM1.59,11.7,5,17.86a1.16,1.16,0,0,0,1,.61c.39,0,.59-.16,1.25-.52l.48,2a1.18,1.18,0,0,0,1.15.89c.2,0-.67.2,14-3.39A1.17,1.17,0,0,0,23.7,16h0L22,9.18a1.17,1.17,0,0,0-1.42-.86l-1.88.46L16,3.79a1.17,1.17,0,0,0-1.59-.47L13.14,4H6.92a.39.39,0,0,0-.4.39.4.4,0,0,0,.4.39h4.8l-1.42.78H2.61a.4.4,0,0,0,0,.79H8.87L6,7.91H3A.4.4,0,0,0,3,8.7H4.61L2.05,10.11a1.17,1.17,0,0,0-.46,1.59Zm3.6-.65,2.57-1.4a3.19,3.19,0,0,0,0,1.81l-.86.21a1.17,1.17,0,0,0-.86,1.42h0l.39,1.6a1.56,1.56,0,0,0-.53,0L4.75,12.58a1.6,1.6,0,0,0,.45-1.53ZM15.92,9.47l-2.77.68a3.4,3.4,0,0,0-2.21-2.26l2.57-1.41A1.54,1.54,0,0,0,15,6.93l1.18,2.14a1.68,1.68,0,0,0-.3.4Zm-7.36,1.8A2.19,2.19,0,0,1,9,9l.2.37A1.17,1.17,0,0,0,9.31,11l.08.06Zm3-.72a1.19,1.19,0,0,0-1.23-.07.38.38,0,0,1-.53-.15.39.39,0,0,1,.15-.53.38.38,0,0,1,.53.15h0a.41.41,0,0,0,.54.16.4.4,0,0,0,.15-.53A1.15,1.15,0,0,0,9.91,9l-.19-.36a2.35,2.35,0,0,1,2.67,1.7Zm9.27-1.47a.39.39,0,0,1,.47.28l1.68,6.84a.41.41,0,0,1-.29.48L9,20a.39.39,0,0,1-.47-.29L6.83,12.9a.39.39,0,0,1,.29-.47h0ZM2.43,10.79,14.76,4a.4.4,0,0,1,.54.15h0L17.94,9l-.84.21c0-.15.1.07-1.55-2.93a.36.36,0,0,0-.24-.18c-.3-.09-.41.23-.89.09A.76.76,0,0,1,14,5.79a.39.39,0,0,0-.53-.16h0l-8.9,4.91a.39.39,0,0,0-.16.53.78.78,0,0,1-.31,1.06.39.39,0,0,0-.16.53h0L5.4,15.4a.38.38,0,0,0,.53.15h0a.78.78,0,0,1,.74,0l.39,1.6-.87.48a.38.38,0,0,1-.53-.15L2.27,11.32a.39.39,0,0,1,.15-.53Zm.57,10H6.91a.39.39,0,0,0,.4-.39.4.4,0,0,0-.4-.39H3a.4.4,0,0,0-.39.39.39.39,0,0,0,.39.39Zm-2.34,0h.78a.38.38,0,0,0,.39-.39A.39.39,0,0,0,1.44,20H.66a.39.39,0,0,0-.39.39A.38.38,0,0,0,.66,20.82ZM.66,8.7h.78a.4.4,0,0,0,0-.79H.66a.4.4,0,0,0,0,.79Zm.78,9.78H3.79a.4.4,0,0,0,0-.79H1.44a.4.4,0,0,0,0,.79ZM3,15.74a.38.38,0,0,0-.39-.39H1.05a.38.38,0,0,0-.39.39.39.39,0,0,0,.39.39H2.61A.39.39,0,0,0,3,15.74Zm-2.34-2h.78a.38.38,0,0,0,.39-.39A.39.39,0,0,0,1.44,13H.66a.39.39,0,0,0-.39.39A.38.38,0,0,0,.66,13.78Z"

// #############################################################################
// export 
// #############################################################################

export default function _default({classes}){ return(<SvgGenerator classes={classes}>{icon}</SvgGenerator>) }
export const Transaction = ({classes}) => (<SvgGenerator classes={classes}>{icon}</SvgGenerator>)
