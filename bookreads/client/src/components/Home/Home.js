import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Post from '../Posts/Post/Post';

import Welcome from '../Welcome/Welcome';

import './Home.css';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user
                ?
                <main className="main__home">
                    <Post />
                </main>
                : <Welcome />
            }
        </>
    );
}

export default Home;