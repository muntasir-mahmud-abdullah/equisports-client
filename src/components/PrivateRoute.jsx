import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user){
        return children;
        }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};

export default PrivateRoute;