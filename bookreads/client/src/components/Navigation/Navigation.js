import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';

import Logo from '../Logo/Logo';
import defaultUserPhoto from '../../assets/default-user-photo.png';

import './Navigation.css';

import { AuthContext } from '../../contexts/AuthContext';
import { removeUser } from '../../services/localStorage';

const Navigation = () => {
    const { user } = useContext(AuthContext);
    const [profileOpen, setProfileOpen] = useState(false);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
    }, [user?.token]);

    const logout = () => {
        removeUser();
    }
    const handleProfileClick = () => {
        setProfileOpen(prevState => !prevState);
    }

    return (
        <section className="section__navigation">
            <nav className="navigation header__navigation">
                <Logo />
                {user && Object.keys(user).length > 0
                    ?
                    <>
                        <ul className="header__ul">
                            <li className="header__ul--li">
                                <Link to={'/home'}>
                                    Home
                                </Link>
                            </li>
                            <li className="header__ul--li">
                                <Link to={'/mybooks'} >
                                    My Books
                                </Link>
                            </li>
                            <li className="header__ul--li">
                                Browse
                            </li>
                        </ul>

                        <form className="header__form--search">
                            <input className="header__form--input" placeholder="Search books" />
                        </form>

                        <article className="header__article header__article--profile">
                            <img
                                onClick={handleProfileClick}
                                src={user?.result?.imageUrl ? user.result?.imageUrl : defaultUserPhoto}
                                alt={user?.result?.name}
                            />

                            {profileOpen && (
                                <ul className="header__article--ul article__profile--ul">
                                    <h4 className="profile__ul--name">{user?.result?.name}</h4>
                                    <li className="profile__ul--li">
                                        <Link to={`/user/${user?.result?.name.split(' ').join('').toLowerCase()}/${user?.result?.googleId || user?.result?._id}`}
                                            onClick={handleProfileClick}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="profile__ul--li">
                                        <Link to={'/'}
                                            onClick={handleProfileClick}
                                        >
                                            Friends
                                        </Link>
                                    </li>
                                    <li className="profile__ul--li">
                                        <Link to={'/'} onClick={() => {
                                            logout();
                                            handleProfileClick();
                                        }}>
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </article>
                    </>
                    : null
                }
            </nav>
        </section >
    );
}

export default Navigation;