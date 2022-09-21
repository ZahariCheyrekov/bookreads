import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getBooksByTitle } from '../../services/book';

import Spinner from '../../../../components/Spinner';
import GenreList from '../../../genres/components/GenreList';

import './Search.css';

const Search = () => {
    const navigate = useNavigate();
    const { bookTitle } = useParams();
    const [books, setBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setSearchTitle(bookTitle)
        const fetchBooks = async () => {
            const books = await getBooksByTitle(bookTitle);
            setBooks(books);
            setIsLoading(false);
        }
        fetchBooks();
    }, [bookTitle]);

    const handleSearch = (ev) => {
        ev.preventDefault();
        navigate(`/books/search/${searchTitle}`);
    }

    return (
        <main className="main">
            <div className="search__wrapper">
                <section className="search__section">
                    <h3 className="search__section--title">
                        Search
                    </h3>
                    <form className="search__form">
                        <input
                            className="search__form--input"
                            value={searchTitle}
                            onChange={(ev) => setSearchTitle(ev.target.value.trim())}
                        />
                        <button
                            className="search__form--button"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </form>
                    <section className="search__results">
                        <h4 className="search__title--book">
                            Title: {bookTitle}
                        </h4>
                        {isLoading
                            ? <Spinner />
                            : <>
                                {books.length > 0 ?
                                    <ul className="search__books__result--list">
                                        {books.map((book, index) =>
                                            <li
                                                key={index}
                                                className="search__book__list--item"
                                            >
                                                <article className="search__book__result--item">
                                                    <Link to={`/books/${book._id}`}>
                                                        <img src={book.bookCoverUrl} alt={book.title} />
                                                    </Link>
                                                    <summary className="search__book--summary">
                                                        <Link to={`/books/${book._id}`}>
                                                            <h3 className="book__result--title">
                                                                {book.title}
                                                            </h3>
                                                        </Link>
                                                        <h4 className="book__result--author">
                                                            by {book.author}
                                                        </h4>
                                                    </summary>
                                                </article>
                                                <hr className="hr__search__divider" />
                                            </li>
                                        )}
                                    </ul>
                                    :
                                    <section className="genre__section--empty">
                                        <h4 className="genre__section__title--big">
                                            No result for books with title "{bookTitle}"
                                        </h4>
                                        <h5 className="genre__section__title--small">
                                            Create book with this title
                                        </h5>
                                        <a className="genre__section--link" href="/create">
                                            Create book
                                        </a>
                                    </section>
                                }
                            </>
                        }
                    </section>
                </section>
                <GenreList />
            </div>
        </main>
    );
}

export default Search;