import React from 'react'
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, ...rest }) => {
    return isAuthenticated ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;