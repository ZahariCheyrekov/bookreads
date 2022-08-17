import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation header__navigation">
            <Logo />
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
        </nav>
    );
}

export default Navigation;
