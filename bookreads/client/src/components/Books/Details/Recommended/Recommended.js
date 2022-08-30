import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBooks } from '../../../../services/book';
import Book from './Book/Book';

import './Recommended.css';

const Recommended = () => {
    const { id } = useParams();
    const [booksIndex, setBooksIndex] = useState({ start: 0, end: 4 })
    const [recommendedBooks, setRecommendedBooks] = useState([]);

    useEffect(() => {
        const fetchRecommendedBooks = async () => {
            const books = await getBooks(id);
            setRecommendedBooks(books);
        }
        fetchRecommendedBooks();
        setBooksIndex({ start: 0, end: 4 });
    }, [id]);

    const handleLeftArrow = () => {
        if (booksIndex.start - 4 >= 0) {
            setBooksIndex({ start: booksIndex.start - 4, end: booksIndex.end - 4 });
        }
    }
console.log(recommendedBooks)
    const handleRightArrow = () => {
        if (booksIndex.start + 4 < recommendedBooks.length) {
            setBooksIndex({ start: booksIndex.start + 4, end: booksIndex.end + 4 });
        }
    }

    return (
        <section className="recommended">
            <article className="recommended__artile--top">
                <h3 className="recommended__title">Recommended books</h3>
                <span className="recommended__arrows">
                    <i className="fa-solid fa-chevron-left" onClick={handleLeftArrow} />
                    <i className="fa-solid fa-chevron-right" onClick={handleRightArrow} />
                </span>
            </article>
            <ul className="recommended__books">
                {recommendedBooks.slice(booksIndex.start, booksIndex.end).map(book =>
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