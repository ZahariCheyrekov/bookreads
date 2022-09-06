import { Link } from 'react-router-dom';

import bookreads from '../../assets/bookreads-logo.png'

import './Logo.css';

const Logo = () => {
    return (
        <article className="header__navigation--article">
            <Link to={'/'}>
                <img src={bookreads} className="navigation__article--logo" alt="bookreads" />
            </Link>
        </article>
    );
}

export default Logo;