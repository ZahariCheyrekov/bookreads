import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getUser } from '../services/localStorage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = getUser();
        if (currentUser) {
            setUser(currentUser);
            setIsLoading(false);
        }
    }, [location]);

    return (
        <AuthContext.Provider
            value={{ user, isLoading, setUser }}
        >
            {children}
        </AuthContext.Provider>
    );
}