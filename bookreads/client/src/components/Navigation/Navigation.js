import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import defaultUserPhoto from '../../assets/default-user-photo.png';
import { removeUser } from '../../features/user/userSlice';

import './Navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [profileOpen, setProfileOpen] = useState(false);

    const logout = () => {
        dispatch(removeUser());
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
                                src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                                alt={user?.result?.name}
                            />

                            {profileOpen && (
                                <ul className="header__article--ul article__profile--ul">
                                    <h4 className="profile__ul--name">{user?.result?.name}</h4>
                                    <li className="profile__ul--li">
                                        <Link to={`/user/${user.result.name.split(' ').join('').toLowerCase()}/${user.googleId}`}
                                            onClick={handleProfileClick}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="profile__ul--li">
                                        <Link to={'/'} onClick={handleProfileClick}>Friends</Link>
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