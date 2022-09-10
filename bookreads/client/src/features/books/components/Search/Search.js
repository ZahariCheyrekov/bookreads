import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import GenreList from '../../../genres/components/GenreList';

import { getBooksByTitle } from '../../services/book';

import './Search.css';

const Search = () => {
    const { bookTitle } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooksByTitle(bookTitle);
            setBooks(books);
        }
        fetchBooks();
    }, [bookTitle]);

    return (
        <main className="main">
            <div className="search__wrapper">
                <section className="search__section">
                    <h3 className="search__section--title">
                        Search
                    </h3>
                    <form className="search__form">
                        <input className="search__form--input" />
                        <button className="search__form--button">Search</button>
                    </form>
                    <section className="search__results">
                        <h4 className="search__title--book">
                            Title: {bookTitle}
                        </h4>
                        <ul className="search__books__result--list">

                        </ul>
                    </section>
                </section>
                <GenreList />
            </div>
        </main>
    );
}

export default Search;