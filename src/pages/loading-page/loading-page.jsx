import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from '@material-ui/core/CircularProgress';

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles( theme => ({
    paper: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        overflow: 'hidden',
        direction: 'rtl',
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            marginBottom: 16
        },
    },
}));

// #############################################################################
// component
// #############################################################################

export default function LoadingPage(props){
    const { color = "primary" } = props;
    return <main className={useStyles().paper}><CircularProgress color={color}/></main>
}