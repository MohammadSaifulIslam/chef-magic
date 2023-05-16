import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../others/LoadingSpinner/LoadingSpinner';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location?.pathname}} replace={false}></Navigate>
};

export default PrivateRoutes;