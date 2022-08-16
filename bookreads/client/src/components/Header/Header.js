import { Link, useNavigate } from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import books from '../../assets/books-banner.png'

import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <Navigation />

            <section className="header__section">
                <article className="section__article" >
                    <article className="article__article article__article--info">
                        <h3 className="article__title--small">
                            A place to find your next book.
                        </h3>
                        <h2 className="article__title--big">
                            Tell the world what you are reading.
                        </h2>

                        <aside className="header__aside">
                            <h3 className="header__aside--title">
                                Discover & read more
                            </h3>
                            <button className="aside__button--email" onClick={() => navigate('/nopage')}>
                                Sign up with email
                            </button>
                            <p>
                                Already a member?
                                &nbsp;
                                <Link to={'Sign In'}>
                                    Sign In
                                </Link>
                            </p>
                        </aside>
                    </article>

                    <img className="article__books article__books--img" src={books} alt="books" />
                </article>
            </section>
        </header >
    );
}

export default Header;