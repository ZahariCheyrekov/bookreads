import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const GuestRoutes = () => {
    const user = useContext(AuthContext);
    return !user ? <Navigate to={'/'} /> : <Outlet />;
}

export default GuestRoutes;