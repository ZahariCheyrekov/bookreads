import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Auth.css';

const Auth = () => {
    const { pathname } = useLocation();
    const [isSignIn, setIsSignIn] = useState();

    useEffect(() => {
        if (pathname === '/signin') {
            setIsSignIn(true);
        } else if (pathname === '/signup') {
            setIsSignIn(false);
        }
    }, [pathname]);

    return (
        <main className="main__auth">
            <Logo />
            <form className="form__auth">
                <legend className="form__auth--legend">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </legend>

                {!isSignIn && (
                    <>
                        <label htmlFor="name" className="form__auth--label">Your name</label>
                        <input type="text" name="name" className="form__auth--input" />
                    </>
                )}

                <label htmlFor="email" className="form__auth--label">Email</label>
                <input type="text" className="form__auth--input" />

                <label htmlFor="password" className="form__auth--label">Password</label>
                <input type="password" name="password" className="form__auth--input" />

                {!isSignIn && (
                    <>
                        <label htmlFor="repeatPassword" className="form__auth--label">Repeat password</label>
                        <input type="text" name="repeatPassword" className="form__auth--input" />
                    </>
                )}

                <button className="form__auth--button auth__button">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
            </form>
            <section className="auth__section section__content">
                <p className="section__content--paragraph">
                    By signing in, you agree to the Bookreads Terms of Service and Privacy Policy.
                </p>
                <span className="section__content--span">
                    {isSignIn ? "Don't have an account?" : "Already have an account?"}
                </span>
                <Link to={isSignIn ? "/signup" : "/signin"}>
                    <button className="section__content--button auth__button">
                        {isSignIn ? "Sign Up" : "Sign In"}
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default Auth;