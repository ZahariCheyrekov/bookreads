import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Genres.css';

const Genres = () => {
    const [genreInput, setGenreInput] = useState('');

    const handleFindGenre = () => {

    }

    return (
        <main className="main">
            <article className="genres__page--article">
                <section className="genres">
                    <h3 className="genres__title">
                        Genres
                    </h3>
                    <form className="genres__form">
                        <input
                            className="genres__form--input"
                            placeholder="Find a genre by name"
                            onChange={(ev) => setGenreInput(ev.target.value.trim())}
                        />
                        <button
                            className="genres__form--button"
                            onClick={handleFindGenre}
                        >
                            Find genre
                        </button>
                    </form>

                    {/* TODO: Add books by some genre */}
                    <article className="genres__default--sections">
                        <section className="genres__default__section genres__default--art">
                            <h4 className="genres__section--title">

                            </h4>
                        </section>
                        <section className="genres__default__section genres__default--biography">
                            <h4 className="genres__section--title">

                            </h4>
                        </section>
                        <section className="genres__default__section genres__default--classics">
                            <h4 className="genres__section--title">

                            </h4>
                        </section>
                        <section className="genres__default__section genres__default--nonfiction">
                            <h4 className="genres__section--title">

                            </h4>
                        </section>
                    </article>
                </section>
                <aside className="genres__aside">
                    <h3 className="genres__aside--title genres__title">
                        Browse
                    </h3>
                    <ul className="genres__aside--list">
                        <li className="genres__aside__list--item">
                            <Link to={''}>Art</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Biography</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Business</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Classics</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Comics</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Cookbooks</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Crime</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Ebooks</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Fantasy</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Fiction</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>History</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Horror</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Comedy</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Memoir</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Music</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Mystery</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Nonfiction</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Philosophy</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Poetry</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Psychology</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Romance</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Science</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Science Fiction</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Sports</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Thriller</Link>
                        </li>
                        <li className="genres__aside__list--item">
                            <Link to={''}>Travel</Link>
                        </li>
                    </ul>
                </aside>
            </article>
        </main>
    );
}

export default Genres;