import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import GenreList from '../../layouts/GenreList/GenreList';
import { getBooksByGivenGenre } from '../../services/genre';

import './Genre.css';

export const Genre = () => {
    const { genre } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooksByGivenGenre(genre);
            setBooks(books);
        }
        fetchBooks();
    }, [genre]);

    return (
        <main className="main">
            <div className="genre__books--wrapper">
                <section className="genre__books">
                    <h3 className="genres__title">
                        {genre.toUpperCase()}
                    </h3>
                    <h4 className="genre__name--title">
                        {genre.toUpperCase()} BOOKS
                    </h4>
                    <ul className="genre__books--list">
                        {books.map(book =>
                            <li
                                key={book._id}
                                className="genre__book--item"
                            >
                                <Link to={`/books/${book._id}`}>
                                    <img src={book.bookCoverUrl} alt={book.title} />
                                </Link>
                            </li>
                        )}
                    </ul>
                </section>
                <GenreList />
            </div>
        </main>
    );
}

export default Genre;