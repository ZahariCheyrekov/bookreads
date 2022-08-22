import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const GuestRoutes = () => {
    const { user, isLoading } = useContext(AuthContext);

    if (!isLoading) {
        return user ? <Navigate to={'/'} /> : <Outlet />;
    }
}

export default GuestRoutes;