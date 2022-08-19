import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import defaultUserPhoto from '../../assets/default-user-photo.png';
import { removeUser } from '../../features/user/userSlice';

import './Navigation.css';

const Navigation = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeUser());
    }

    return (
        <nav className="navigation header__navigation">
            <Logo />
            {user?.email ?
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

                    <button onClick={logout}>logout</button>

                    <article className="header__article header__article--profile">
                        <img src={user?.imageUrl ? user.imageUrl : defaultUserPhoto} />
                    </article>
                </>
                : null
            }
        </nav>
    );
}

export default Navigation;