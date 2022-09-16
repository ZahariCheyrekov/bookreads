import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';

import { getUserById } from '../services/user';

export const useCurrentUser = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getUserById(user?.result._id);
            setCurrentUser(currentUser);
        }
        fetchUser();
    }, [user]);

    return currentUser;
}