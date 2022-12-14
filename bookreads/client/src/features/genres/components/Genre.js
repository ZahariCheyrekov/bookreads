import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBooksByGivenGenre } from '../services/genre';

import Spinner from '../../../components/Spinner';
import GenreList from './GenreList';

import './Genre.css';

export const Genre = () => {
    const { genre } = useParams();
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooksByGivenGenre(genre);
            setBooks(books);
            setIsLoading(false);
        }
        fetchBooks();
    }, [genre]);

    return (
        <main className="main">
            <div className="genre__books--wrapper">
                <section className="genre__books">
                    <h4 className="genre__name--title">
                        {genre.toUpperCase()} BOOKS
                    </h4>
                    {isLoading
                        ? <Spinner />
                        : <>
                            {books.length > 0 ?
                                <ul className="genre__books--list">
                                    {books.map(book =>
                                        <li
                                            className="genre__book--item"
                                            key={book._id}
                                        >
                                            <Link to={`/books/${book._id}`}>
                                                <img src={book.bookCoverUrl} alt={book.title} />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                                :
                                <section className="genre__section--empty">
                                    <h4 className="genre__section__title--big">
                                        No books with genre "{`${genre}`}"
                                    </h4>
                                    <h5 className="genre__section__title--small">
                                        Create book with this genre or with other one
                                    </h5>
                                    <Link to={'/create'} className="genre__section--link">
                                        Create book
                                    </Link>
                                </section>
                            }
                        </>
                    }
                </section>
                <GenreList />
            </div>
        </main >
    );
}

export default Genre;