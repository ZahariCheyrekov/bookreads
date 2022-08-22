import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import './App.css';
import './index.css';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Details from './components/Books/Details/Details';
import BookForm from './components/Books/BookForm/BookForm';
import Auth from './components/Auth/Auth';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

import UserRoutes from './components/ProtectedRoutes/UserRoutes';
import GuestRoutes from './components/ProtectedRoutes/GuestRoutes';

function App() {
    return (
        <AuthContextProvider>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<UserRoutes />}>
                    <Route path="/user/:name/:id" element={<Profile />} />
                    <Route path='/books/:id' element={<Details />} />

                    {['create', 'books/:id/edit'].map((path) => (
                        <Route key={path} path={`/${path}`} element={<BookForm />} />
                    ))}
                </Route>
                <Route element={<GuestRoutes />}>
                    {['signin', 'signup'].map((path) => (
                        <Route key={path} path={`/user/${path}`} element={<Auth />} />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </AuthContextProvider>
    );
}

export default App;