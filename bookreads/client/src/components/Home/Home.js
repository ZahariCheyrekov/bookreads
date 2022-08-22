import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user
                ? <div>
                    Home
                </div>
                : <Welcome />
            }
        </>
    );
}

export default Home;