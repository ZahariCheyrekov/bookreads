import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserById } from '../services/user';

export const useCurrentUser = () => {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setCurrentUser(user);
        }
        fetchUser();
    }, [id]);

    return currentUser;
}