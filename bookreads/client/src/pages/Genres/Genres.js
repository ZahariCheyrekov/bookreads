import { useState } from 'react';

import { Link } from 'react-router-dom';

import { genres } from '../../constants/shelves';

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
                        {genres.map(genre =>
                            <li
                                key={genre}
                                className="genres__aside__list--item"
                            >
                                <Link to={`/genres/${genre.toLowerCase()}`}>
                                    {genre}
                                </Link>
                            </li>
                        )}
                    </ul>
                </aside>
            </article>
        </main>
    );
}

export default Genres;