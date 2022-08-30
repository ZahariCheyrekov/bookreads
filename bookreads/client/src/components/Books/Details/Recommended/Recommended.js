import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBooks } from '../../../../services/book';
import Book from './Book/Book';

import './Recommended.css';

const Recommended = () => {
    const { id } = useParams();
    const [recommendedBooks, setRecommendedBooks] = useState([]);

    useEffect(() => {
        const fetchRecommendedBooks = async () => {
            const books = await getBooks(id);
            setRecommendedBooks(books);
        }
        fetchRecommendedBooks();
    }, [id]);

    return (
        <section className="recommended">
            <article className="recommended__artile--top">
                <h3 className="recommended__title">Recommended books</h3>
                <span className="recommended__arrows">
                    <i class="fa-solid fa-chevron-left"></i>
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </article>
            <ul className="recommended__books">
                {recommendedBooks.map(book =>
                    <Book
                        key={book._id}
                        book={book}
                    />
                )}
            </ul>
        </section>
    );
}

export default Recommended;