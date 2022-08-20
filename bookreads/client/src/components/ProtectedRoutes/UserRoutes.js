import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const UserRoutes = () => {
    const user = useContext(AuthContext);
    return user ? <Outlet /> : <Navigate to={'/user/signin'} />
}

export default UserRoutes;