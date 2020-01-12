import React from "react";
import { makeStyles } from "@material-ui/core";

// #############################################################################
// this component gets the icon path from outside then generates the SVG icon
// #############################################################################

export default function SvgGenerator(props){
	const styles = useStyles();
	const { classes = [] } = props
	return(
		<svg className={`${styles.root} ${classes.root}`} role="presentation" aria-hidden={true} focusable={false} viewBox="0 0 24 24">
			<path d={props.children} />
		</svg>
	)
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
	root: {
		fill: "currentColor",
	    width: "1em",
	    height: "1em",
	    display: "inline-block",
	    fontSize: "1.5rem",
	    transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
	    flexShrink: 0,
	    userSelect: "none",
	}
}))

// #############################################################################
// 
// #############################################################################