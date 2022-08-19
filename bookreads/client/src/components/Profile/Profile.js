import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import defaultUserPhoto from '../../assets/default-user-photo.png';

import './Profile.css';

const Profile = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <main className="main__profile">
            <section className="main__profile--section">
                <article className="profile__section--article">
                    <img src={user?.imageUrl ? user.imageUrl : defaultUserPhoto}
                        alt={`${user.name}`}
                    />
                </article>
                <h4 className="profile__section--user">
                    {user.name}
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