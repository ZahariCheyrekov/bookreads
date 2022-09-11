import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { SIGN_IN, SIGN_UP } from '../constants/actionTypes';
import { auth } from '../services/auth';

import Logo from '../../../layouts/Logo/Logo';

import './Auth.css';

const Auth = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isSignIn, setIsSignIn] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', repeatPassword: '' });

    useEffect(() => {
        if (pathname === '/user/signin') {
            setIsSignIn(true);
        } else if (pathname === '/user/signup') {
            setIsSignIn(false);
        }
    }, [pathname]);

    const handleClick = () => {
        setShowPassword(prevState => !prevState);
    }

    const handleChange = (ev) => {
        setFormData({ ...formData, [ev.target.name]: ev.target.value.trim() })
    }

    const handleAuth = async (ev) => {
        ev.preventDefault();

        const actionType = isSignIn ? SIGN_IN : SIGN_UP;
        await auth(actionType, formData, navigate);
    }

    return (
        <main className="main__auth">
            <Logo />
            <form className="main__form">
                <legend className="form__legend">{isSignIn ? "Sign In" : "Sign Up"}</legend>

                {!isSignIn && (
                    <>
                        <label htmlFor="name" className="form__label">Your name</label>
                        <input type="text" name="name" className="form__input" onChange={handleChange} />
                    </>
                )}

                <label htmlFor="email" className="form__label">Email</label>
                <input type="text" name="email" className="form__input" onChange={handleChange} />

                <label htmlFor="password" className="form__label password">Password
                    <input type={showPassword ? "text" : "password"} name="password" className="form__input password" onChange={handleChange} />
                    <i className="fa-regular fa-eye" onClick={handleClick}></i>
                </label>

                {!isSignIn && (
                    <>
                        <label htmlFor="repeatPassword" className="form__label password">Repeat password</label>
                        <input type={showPassword ? "text" : "password"} name="repeatPassword" className="form__input password" onChange={handleChange} />
                    </>
                )}
                <button className="form__button auth__button" onClick={handleAuth}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
            </form>

            <section className="auth__section section__content">
                <p className="section__content--paragraph">
                    By signing in, you agree to the Bookreads
                    Terms of Service and Privacy Policy.
                </p>
                <span className="section__content--span">
                    {isSignIn ? "Don't have an account?" : "Already have an account?"}
                </span>
                <Link to={isSignIn ? "/user/signup" : "/user/signin"}>
                    <button className="section__content--button auth__button">
                        {isSignIn ? "Sign Up" : "Sign In"}
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default Auth;