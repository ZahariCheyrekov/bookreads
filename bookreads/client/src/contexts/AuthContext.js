import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getUser } from '../services/localStorage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const user = getUser();
        setCurrentUser(user);
    }, [location]);

    return (
        <AuthContext.Provider
            value={currentUser}
        >
            {children}
        </AuthContext.Provider>
    );
}