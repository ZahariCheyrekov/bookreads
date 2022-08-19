import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';

import Navigation from './components/Navigation/Navigation';
import Auth from './components/Auth/Auth';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/user/signin" element={<Auth />} />
                <Route path="/user/signup" element={<Auth />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/user/:name/:id" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;