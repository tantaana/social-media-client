import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center mt-10'><h3>Loading...</h3></div>
    }

    if (!user) {
        console.log('shit')
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children
};

export default PrivateRoute;