import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script"

import { googleFailure, start } from '../../../services/google';
import { GOOGLE_CLIENT_AUTH } from '../../../constants/google';

import books from '../../../assets/books-banner.png'

import './Header.css';
import { saveUser } from '../../../services/localStorage';

const Header = () => {
    const navigate = useNavigate();

    useEffect(() => {
        gapi.load(GOOGLE_CLIENT_AUTH, start);
    }, []);

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        const user = { result: result, token }
        saveUser(user);
        navigate('/');
    }

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
                        <aside className="header__aside">
                            <h3 className="header__aside--title">
                                Discover & read more
                            </h3>

                            <GoogleLogin
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="aside__button aside__button--google">
                                        <i className="fa-brands fa-google"></i>
                                        &nbsp;
                                        Continue with Google
                                    </button>
                                )}
                                cookiePolicy="single_host_origin"
                            />
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