import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../Logo/Logo';

import './Navigation.css';

const Navigation = () => {
    const user = useSelector((state) => state.user);
    console.log(user.user);

    return (
        <nav className="navigation header__navigation">
            <Logo />
            {user?.user?.email ?
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
                </>
                : null
            }
        </nav>
    );
}

export default Navigation;