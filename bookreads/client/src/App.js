import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';

import './App.css';
import './index.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;