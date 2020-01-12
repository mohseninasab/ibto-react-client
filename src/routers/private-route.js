import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import CanUse from 'components/can-use';

export default ({name,...route}) =>{
    return <CanUse
        name={name}
        yes={()=><Route {...route} />}
        no={()=><Redirect to="/" />}
        notAuthorized={()=><Redirect to="/404"/>}
    />
}