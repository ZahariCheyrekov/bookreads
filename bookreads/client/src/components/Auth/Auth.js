import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Auth.css';

const Auth = () => {
    return (
        <main className="main__auth">
            <Logo />
            <form className="form__auth">
                <legend className="form__auth--legend">Sign In</legend>

                <label htmlFor="email" className="form__auth--label">Email</label>
                <input type="text" className="form__auth--input" />

                <label htmlFor="password" className="form__auth--label">Password</label>
                <input type="password" className="form__auth--input" />

                <button className="form__auth--button">Sign In</button>
            </form>
        </main>
    );
}

export default Auth;