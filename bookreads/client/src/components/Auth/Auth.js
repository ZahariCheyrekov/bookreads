import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Auth.css';

const Auth = () => {
    const { pathname } = useLocation();
    const [isSignIn, setIsSignIn] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', repeatPassword: '' });

    useEffect(() => {
        if (pathname === '/signin') {
            setIsSignIn(true);
        } else if (pathname === '/signup') {
            setIsSignIn(false);
        }
    }, [pathname]);

    const handleClick = () => {
        setShowPassword(prevState => !prevState);
    }

    const handleChange = (ev) => {
        setFormData({ ...formData, [ev.target.name]: ev.target.value.trim() })
    }

    const handleAuth = (ev) => {
        ev.preventDefault();
    }

    return (
        <main className="main__auth">
            <Logo />
            <form className="form__auth">
                <legend className="form__auth--legend">{isSignIn ? "Sign In" : "Sign Up"}</legend>

                {!isSignIn && (
                    <>
                        <label htmlFor="name" className="form__auth--label">Your name</label>
                        <input type="text" name="name" className="form__auth--input" onChange={handleChange} />
                    </>
                )}

                <label htmlFor="email" className="form__auth--label">Email</label>
                <input type="text" name="email" className="form__auth--input" onChange={handleChange} />

                <label htmlFor="password" className="form__auth--label password">Password
                    <input type={showPassword ? "text" : "password"} name="password" className="form__auth--input password" onChange={handleChange} />
                    <i className="fa-regular fa-eye" onClick={handleClick}></i>
                </label>

                {!isSignIn && (
                    <>
                        <label htmlFor="repeatPassword" className="form__auth--label password">Repeat password</label>
                        <input type={showPassword ? "text" : "password"} name="repeatPassword" className="form__auth--input password" onChange={handleChange} />
                    </>
                )}
                <button className="form__auth--button auth__button" onClick={handleAuth}>
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