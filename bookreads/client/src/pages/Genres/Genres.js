import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { genres } from '../../constants/shelves';
import { getDefaultBooks } from '../../services/genre';

import Spinner from '../../components/Spinner/Spinner';

import './Genres.css';

const Genres = () => {
    const navigate = useNavigate();
    const [genreInput, setGenreInput] = useState('');
    const [defaultBooks, setDefaultBooks] = useState({});

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getDefaultBooks();
            setDefaultBooks(books);
        }
        fetchBooks();
    }, []);

    const handleFindGenre = (ev) => {
        ev.preventDefault();

        const genre = genreInput.toLowerCase();
        navigate(`/genres/${genre}`);
    }

    return (
        <>
            {Object.values(defaultBooks).length > 0 ?
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
                            <article className="genres__default--sections">
                                <section className="genres__default__section genres__default--art">
                                    <h4 className="genres__section--title">
                                        Biography
                                    </h4>
                                    <ul className="genres__default--list">
                                        {defaultBooks.biographyBooks.map(book =>
                                            <li
                                                key={book._id}
                                                className="genres__default--book"
                                            >
                                                <Link to={`/books/${book._id}`}>
                                                    <img src={book.bookCoverUrl} alt={book.title} />
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                    <p className="genres__books--more">
                                        <Link to={'/genres/biography'} className="genres__books--more">
                                            More biography books...
                                        </Link>
                                    </p>
                                </section>
                                <section className="genres__default__section genres__default--biography">
                                    <h4 className="genres__section--title">
                                        Fiction
                                    </h4>
                                    <ul className="genres__default--list">
                                        {defaultBooks.fictionBooks.map(book =>
                                            <li
                                                key={book._id}
                                                className="genres__default--book"
                                            >
                                                <Link to={`/books/${book._id}`}>
                                                    <img src={book.bookCoverUrl} alt={book.title} />
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                    <p className="genres__books--more">
                                        <Link to={'/genres/fiction'} className="genres__books--more">
                                            More fiction books...
                                        </Link>
                                    </p>
                                </section>
                                <section className="genres__default__section genres__default--classics">
                                    <h4 className="genres__section--title">
                                        Philosophy
                                    </h4>
                                    <ul className="genres__default--list">
                                        {defaultBooks.philosophyBooks.map(book =>
                                            <li
                                                key={book._id}
                                                className="genres__default--book"
                                            >
                                                <Link to={`/books/${book._id}`}>
                                                    <img src={book.bookCoverUrl} alt={book.title} />
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                    <p className="genres__books--more">
                                        <Link to={'/genres/philosophy'}>
                                            More philosophy books...
                                        </Link>
                                    </p>
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
                </main >
                : <Spinner />
            }
        </>
    );
}

export default Genres;