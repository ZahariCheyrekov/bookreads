import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { getUserLink } from '../../../utils/getUserLink';

import './Menu.css';

const Menu = ({ profileOpen, handleProfileClick, logout }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {profileOpen && (
                <ul className="header__article--ul article__profile--ul">
                    <Link to={getUserLink(user.result.name, user.result._id)}
                        onClick={handleProfileClick}
                    >
                        <h4 className="profile__ul--name">{user?.result?.name}</h4>
                    </Link>
                    <li className="profile__ul--li">
                        <Link to={getUserLink(user.result.name, user.result._id)}
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
                            handleProfileClick();
                            logout();
                        }}>
                            Sign out
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Menu;