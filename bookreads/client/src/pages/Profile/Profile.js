import { Link, useParams } from 'react-router-dom';

import { useCurrentUser } from '../../hooks/useCurrentUser';

import defaultUserPhoto from '../../assets/default-user-photo.png';

import Spinner from '../../components/Spinner/Spinner';
import Updates from '../../components/Updates/Updates';

import './Profile.css';

const Profile = () => {
    const { id } = useParams();
    const currentUser = useCurrentUser();

    return (
        <main className="main__profile">
            {currentUser ?
                <>
                    <section className="main__profile--section">
                        <article className="profile__section--article">
                            <img src={currentUser.imageUrl ? currentUser.imageUrl : defaultUserPhoto}
                                alt={`${currentUser?.name}`}
                            />
                        </article>
                        <h4 className="profile__section--user">
                            {currentUser.name}
                        </h4>
                    </section>
                    <section className="profile__user--bookshelves">
                        <h5 className="profile__bookshelves--title">
                            {currentUser.name.split(' ')[0]}'s bookshelves
                        </h5>
                        <hr className="profile__hr" />
                        <ul className="profile__bookshelves">
                            <li className="profile__bookshelve">
                                <Link to={`/user/${id}/shelves/read`}>
                                    read ({currentUser.shelves.read.length})
                                </Link>
                            </li>
                            <li className="profile__bookshelve">
                                <Link to={`/user/${id}/shelves/currently-reading`}>
                                    currently-reading ({currentUser.shelves.currentlyReading.length})
                                </Link>
                            </li>
                            <li className="profile__bookshelve">
                                <Link to={`/user/${id}/shelves/to-read`}>
                                    to-read ({currentUser.shelves.toRead.length})
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <Updates
                        userId={id}
                        currentUser={currentUser}
                    />
                </>
                : <Spinner />
            }
        </main >
    );
}

export default Profile;