import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';

import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/signin" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;