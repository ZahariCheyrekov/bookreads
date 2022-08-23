import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Posts from './Posts/Posts';
import Welcome from '../Welcome/Welcome';

import './Home.css';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user
                ?
                <main className="main">
                    <Posts />
                    Home
                </main>
                : <Welcome />
            }
        </>
    );
}

export default Home;