import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AppContext } from '../context/Context';

const PrivateRoute = ({ children }) => {
    
    const{token} = useContext(AppContext);
    return token ? children : <Navigate to="/login" />;
};

export {PrivateRoute};