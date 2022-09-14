import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { getUserLink } from '../../../utils/getUserLink';

import './Menu.css';

const Menu = ({ handleProfileClick, logout }) => {
    const { user } = useContext(AuthContext);

    return (
        <ul className="header__article--ul article__profile--ul">
            <Link to={getUserLink(user?.result?.name, user?.result?._id)}
                onClick={handleProfileClick}
            >
                <h4 className="profile__ul--name">{user?.result?.name}</h4>
            </Link>
            <li className="profile__ul--li">
                <Link to={'/'}
                    onClick={handleProfileClick}
                >
                    Home
                </Link>
            </li>
            <li className="profile__ul--li">
                <Link to={getUserLink(user.result.name, user.result._id)}
                    onClick={handleProfileClick}
                >
                    Profile
                </Link>
            </li>
            <li className="profile__ul--li">
                <Link to={'/create'}
                    onClick={handleProfileClick}
                >
                    Create book
                </Link>
            </li>
            <li className="profile__ul--li">
                <Link to={'/genres'}
                    onClick={handleProfileClick}
                >
                    Browse
                </Link>
            </li>
            <li className="profile__ul--li">
                <Link to={`/user/${user.result._id}/shelves`}
                    onClick={handleProfileClick}
                >
                    Shelves
                </Link>
            </li>
            <li className="profile__ul--li">
                <Link to={'/'} onClick={() => {
                    handleProfileClick();
                    logout();
                }}>
                    Sign out
                </Link>
            </li>
        </ul>
    );
}

export default Menu;