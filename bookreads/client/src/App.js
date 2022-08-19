import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';

import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/Navigation/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/signin" element={<Auth />} />
                <Route path="/user/signup" element={<Auth />} />
                <Route path="/user/:name/:id" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;