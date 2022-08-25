import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import defaultUserPhoto from '../../assets/default-user-photo.png';
import { getUserById } from '../../services/user';

import './Profile.css';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setUser(user);
        }
        fetchUser();
    }, [id]);

    return (
        <main className="main__profile">
            <section className="main__profile--section">
                <article className="profile__section--article">
                    <img src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                        alt={`${user}`}
                    />
                </article>
                <h4 className="profile__section--user">
                    {user}
                </h4>
                <Link to={'/user/edit'}>
                    <button className="profile__section--edit">
                        Edit profile
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default Profile;