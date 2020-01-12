import {useSelector} from 'react-redux';
import { roleAccess } from '../constants';

// #############################################################################
// this function will check if the users have access to the route or not
// #############################################################################

export const canUse = (name,currentRole) => {
    return !name || (currentRole && roleAccess[currentRole].includes(name));
}

// #############################################################################
// this function will return the return the route base on the user login or access
// #############################################################################

export default ({name, yes = () => null, no = () => null, notAuthorized = () => null, isAuthenticated}) =>{
    const { role } = useSelector(state => state.user);
    if (role) {
        isAuthenticated && isAuthenticated();
        return canUse(name, role) ? yes() : notAuthorized();
    }
    return no();
}