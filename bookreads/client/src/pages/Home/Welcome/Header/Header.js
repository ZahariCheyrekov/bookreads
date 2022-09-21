import { Link } from 'react-router-dom';

import books from '../../../../assets/books-banner.png'

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <section className="header__section">
                <article className="section__article" >
                    <article className="article__article article__article--info">
                        <h3 className="article__title--small">
                            A place to find your next book.
                        </h3>
                        <h2 className="article__title--big">
                            Tell the world what you are reading.
                        </h2>
                        <h4 className="article__title--smallest">
                            Find and read more books. Be part of Boodreads,
                            the world's largest community for readers like you.
                        </h4>
                        <aside className="header__aside">
                            <h3 className="header__aside--title">
                                Discover & read more
                            </h3>

                            <Link to={'/user/signin'}>
                                <button className="aside__button aside__button--signin">
                                    Sign in to Bookreads
                                </button>
                            </Link>

                            <Link to={'/user/signup'}>
                                <button className="aside__button aside__button--email">
                                    Sign up with email
                                </button>
                            </Link>

                            <p className='aside__paragraph--agree'>
                                By creating an account, you agree to the Bookreads
                                &nbsp;
                                <Link className="paragraph__span--lightblue" to={'/'}>
                                    Terms of Service
                                </Link>
                                &nbsp;and&nbsp;
                                <Link className="paragraph__span--lightblue" to={'/'}>
                                    Privacy Policy
                                </Link>.
                            </p>
                            <p className="header__aside--paragraph">
                                Already a member?&nbsp;
                                <Link to={'/user/signin'}>Sign In</Link>
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