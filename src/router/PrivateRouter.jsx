import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router';
import GlobalContext from '../components/context/GlobalContext';

const PrivateRouter = ({ children }) => {
    const { login } = useContext(GlobalContext)
    if (!login) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default PrivateRouter;
