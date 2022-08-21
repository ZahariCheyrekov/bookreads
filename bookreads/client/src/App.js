import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import './App.css';
import './index.css';

import Navigation from './components/Navigation/Navigation';
import Auth from './components/Auth/Auth';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import BookForm from './components/Books/BookForm/BookForm';
import Footer from './components/Footer/Footer';

import UserRoutes from './components/ProtectedRoutes/UserRoutes';
import GuestRoutes from './components/ProtectedRoutes/GuestRoutes';
import Details from './components/Books/Details/Details';

function App() {
    return (
        <AuthContextProvider>
            <Navigation />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route element={<UserRoutes />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/user/:name/:id" element={<Profile />} />
                </Route>
                <Route element={<GuestRoutes />}>
                    {['signin', 'signup'].map((path) => (
                        <Route key={path} path={`/user/${path}`} element={<Auth />} />
                    ))}
                </Route>
                <Route element={<BookForm />}>
                    {['create', 'books/:id/edit'].map((path) => (
                        <Route key={path} path={`/${path}`} element={<BookForm />} />
                    ))}
                </Route>
                <Route path='/books/:id' element={<Details />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </AuthContextProvider>
    );
}

export default App;