import { Link } from 'react-router-dom';
import bookreads from '../../../assets/bookreads-logo.png'

import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation header__navigation">
         
            <article className="header__navigation--article">
                <Link to={'/'}>
                    <img src={bookreads} className="navigation__article--logo" alt="bookreads" />
                </Link>
            </article>
        </nav>
    );
}

export default Navigation;
