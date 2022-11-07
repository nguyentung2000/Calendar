import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import GlobalContext from '../components/context/GlobalContext';
const Logined = ({ children }) => {
    const { login } = useContext(GlobalContext)
    if (login) {
        return <Navigate to="/" />
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default Logined;
