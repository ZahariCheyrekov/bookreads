import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

import Logo from '../Logo/Logo';
import Menu from './Menu/Menu';
import defaultUserPhoto from '../../assets/default-user-photo.png';

import './Navigation.css';

import { AuthContext } from '../../contexts/AuthContext';
import { removeUser } from '../../services/localStorage';

const Navigation = () => {
    const navigate = useNavigate();
    const menuRef = useRef();
    const { user, setUser } = useContext(AuthContext);
    const [profileOpen, setProfileOpen] = useState(false);

    const logout = useCallback(() => {
        removeUser();
        setUser(null);
        navigate('/');
    }, [setUser, navigate]);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
    }, [user?.token, logout]);

    useEffect(() => {
        window.addEventListener('mousedown', clickHandler)
    }, []);

    const clickHandler = (ev) => {
        if (menuRef.current !== null) {
            if (!menuRef?.current?.contains(ev.target)) {
                setProfileOpen(false);
            }
        }
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
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li className="header__ul--li">
                                <Link to={'/mybooks'} >
                                    My Books
                                </Link>
                            </li>
                            <li className="header__ul--li browse">
                                Browse&nbsp;
                                <i className="fa-solid fa-caret-down" />

                                <ul className="browse__list">
                                    <h4 className="browse__list--titel">
                                        Genres
                                    </h4>
                                    <li className="browse__list--element">
                                        Biography
                                    </li>
                                    <li className="browse__list--element">
                                        Fiction
                                    </li>
                                    <li className="browse__list--element">
                                        History
                                    </li>
                                    <li className="browse__list--element">
                                        Science
                                    </li>
                                    <li className="browse__list--element">
                                        All genres
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <form className="header__form--search">
                            <input className="header__form--input" placeholder="Search books" />
                        </form>

                        <article className="header__article header__article--profile" ref={menuRef}>
                            <img
                                onClick={handleProfileClick}
                                src={user?.result?.imageUrl ? user.result?.imageUrl : defaultUserPhoto}
                                alt={user?.result?.name}
                            />

                            <Menu
                                profileOpen={profileOpen}
                                handleProfileClick={handleProfileClick}
                                logout={logout}
                            />
                        </article>
                    </>
                    : null
                }
            </nav>
        </section >
    );
}

export default Navigation;