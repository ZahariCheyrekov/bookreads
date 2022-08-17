import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;