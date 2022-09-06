import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { NotificationContextProvider } from './contexts/NotificationContext';

import './App.css';
import './index.css';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Details from './components/Books/Details/Details';
import CreateReview from './components/Books/Reviews/CreateReview/CreateReview';
import PostLikes from './components/Posts/Post/PostLikes/PostLikes';
import BookForm from './components/Books/BookForm/BookForm';
import Shelves from './components/Profile/Shelves/Shelves';
import Auth from './components/Auth/Auth';
import NotFound from './pages/NotFound/NotFound';
import Notification from './components/Notification/Notification';
import Footer from './layouts/Footer/Footer';

import UserRoutes from './components/ProtectedRoutes/UserRoutes';
import GuestRoutes from './components/ProtectedRoutes/GuestRoutes';

function App() {
    return (
        <AuthContextProvider>
            <NotificationContextProvider>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<UserRoutes />}>
                        <Route path="/user/:name/:id" element={<Profile />} />
                        <Route path='/books/:id' element={<Details />} />
                        <Route path='/review/edit/:id' element={<CreateReview />} />
                        <Route path='/post/:id/likes' element={<PostLikes />} />

                        {['create', 'books/:id/edit'].map((path) => (
                            <Route key={path} path={`/${path}`} element={<BookForm />} />
                        ))}

                        {['read', 'currently-reading', 'to-read'].map((path) => (
                            <Route key={path} path={`/user/:id/shelves/${path}`} element={<Shelves />} />
                        ))}
                    </Route>
                    <Route element={<GuestRoutes />}>
                        {['signin', 'signup'].map((path) => (
                            <Route key={path} path={`/user/${path}`} element={<Auth />} />
                        ))}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Notification />
                <Footer />
            </NotificationContextProvider>
        </AuthContextProvider>
    );
}

export default App;