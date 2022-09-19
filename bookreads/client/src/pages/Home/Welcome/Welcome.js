import { Link } from 'react-router-dom';

import { genres } from '../../../features/genres/constants/genres';

import bookStack from '../../../assets/book-stack.png';
import Header from './Header/Header';

import './Welcome.css';

const Welcome = () => {
    return (
        <>
            <Header />
            <main className="main main__welcome">
                <div className="main__wrapper">
                    <section className="wrapper__section wrapper__section--about">
                        <article className="section__article section__article--about">
                            <h4 className="article__title">
                                Deciding what to read next?
                            </h4>
                            <p className="article__paragraph">
                                You're in the right place. Tell us what titles or genres
                                you've enjoyed in the past, and we'll give you surprisingly
                                insightful recommendations.
                            </p>
                        </article>
                        <article className="section__article section__article--about">
                            <h4 className="article__title">
                                What are your friends reading?
                            </h4>
                            <p className="article__paragraph">
                                Chances are your friends are discussing their favorite
                                (and least favorite) books on Bookreads.
                            </p>
                        </article>
                    </section>
                    <section className="welcome__search__section">
                        <h4 className="welcome__search--title">
                            Search and browse books
                        </h4>
                        <form className="welcome__search--form">
                            <input className="welcome__search--input" placeholder="Book title" />
                            <button
                                className="welcome__search--button"
                                onClick={handleSearch}
                            >
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>
                        </form>
                        <article className="welcome__genres--article">
                            <ul className="welcome__genres--list">
                                {genres.map(genre =>
                                    <li
                                        key={genre}
                                        className="welcome__genres--item"
                                    >
                                        <Link to={`/genres/${genre.toLowerCase()}`}>
                                            {genre}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                            <img src={bookStack} alt="books" />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Welcome;