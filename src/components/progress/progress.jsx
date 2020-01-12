import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


// #############################################################################
//
// #############################################################################

export default function Progress(props){
	const classes = useStyles();
	const progress = useSelector(state => state.progress);
	return progress ? <LinearProgress classes={{root: classes.root, barColorPrimary: classes.bar}} color="primary" /> : null
}

// #############################################################################
//
// #############################################################################

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.progressBar.root,
		position: "fixed",
		top: 0,
		zIndex: 2000,
		width: "100%",
		height: 2,
	},
	bar:{
		background: theme.palette.progressBar.progress,
	}
}))

// #############################################################################
// export
// #############################################################################

export { Progress }