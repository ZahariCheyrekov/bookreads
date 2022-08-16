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
                            <button className="aside__button aside__button--google" onClick={() => navigate('/google')}>
                                <i className="fa-brands fa-google"></i>
                                &nbsp;
                                Continue with Google
                            </button>
                            <button className="aside__button aside__button--email" onClick={() => navigate('/nopage')}>
                                Sign up with email
                            </button>

                            <p className='aside__paragraph--agree'>
                                By creating an account, you agree to the Bookreads
                                &nbsp;
                                <Link className="paragraph__span--lightblue" to={'/'}>
                                    Terms of Service
                                </Link>
                                &nbsp;
                                and
                                &nbsp;
                                <Link className="paragraph__span--lightblue" to={'/'}>
                                    Privacy Policy
                                </Link>.
                            </p>
                            <p className="header__aside--paragraph">
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