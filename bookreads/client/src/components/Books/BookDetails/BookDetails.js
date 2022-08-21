import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import { getCard } from '../../../services/book';

import BookSummary from './BookSummary/BookSummary';
import BookTable from './BookTable/BookTable';
import BookReviews from '../BookReviews/BookReviews';

import './BookDetails.css';
import BookAside from './BookAside/BookAside';

const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const isOwner = user?._id || user?.result?.googleId === book?.creatorId;

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getCard(id);
            setBook(book);
        }
        fetchBook();
    }, [id]);

    return (
        <main className="main__auth">
            {book ?
                <div className="div__wrapper">
                    <BookAside
                        id={id}
                        isOwner={isOwner}
                        bookCoverUrl={book.bookCoverUrl}
                        title={book.title}
                    />

                    <section className="section__book--content">
                        <article className="section__article--book">
                            <h1 className="book__title">{book.title}</h1>
                            <h2 className="book__author">{book.author}</h2>

                            <BookSummary description={book?.description} />

                            <ul className="book__tags">
                                {book.tags.map((tag, index) =>
                                    <li key={index} className="book__tag">
                                        <Link to={`/genres/${tag.toLowerCase().split(' ').join('-')}`}>
                                            {tag}
                                        </Link>
                                    </li>
                                )}
                            </ul>

                            <BookTable book={book} />
                        </article>

                        <hr className="hr__divider" />
                        <BookReviews />
                    </section>
                </div >
                : null
            }
        </main >
    );
}

export default BookDetails;