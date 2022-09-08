import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const UserRoutes = () => {
    const { user, isLoading } = useContext(AuthContext);
    
    if (!isLoading) {
        return !user ? <Navigate to={'/user/signin'} /> : <Outlet />;
    }
}

export default UserRoutes;