import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import { getCard } from '../../../services/book';
import BookReviews from '../BookReviews/BookReviews';

import './BookDetails.css';

const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [visibleSummary, setVisibleSummary] = useState(false);
    const isOwner = user?._id || user?.result?.googleId === book?.creatorId;

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getCard(id);
            setBook(book);
        }
        fetchBook();
    }, [id]);

    const handleVisibleSummary = () => {
        setVisibleSummary(prevState => !prevState);
    }

    return (
        <main className="main__auth">
            {book ?
                <div className="div__wrapper">
                    <aside className="aside__book--content">
                        <article className="aside__book--article">
                            <img src={book.bookCoverUrl} alt={book.title} />
                        </article>
                        {isOwner && (
                            <>
                                <Link to={`/books/${id}/edit`}>
                                    <button className="aside__book--button">
                                        Edit book
                                    </button>
                                </Link>
                                <button className="aside__book--button book__delete--button">
                                    Delete book
                                </button>
                            </>
                        )}
                    </aside>
                    <section className="section__book--content">
                        <article className="section__article--book">
                            <h1 className="book__title">{book.title}</h1>
                            <h2 className="book__author">{book.author}</h2>

                            <summary className={visibleSummary ? 'book__summary--visible' : 'book__summary'}>
                                {book.description.map((paragraph, index) =>
                                    <p key={index} className="book__summary--paragraph">
                                        {paragraph}
                                    </p>
                                )}

                                <span className={visibleSummary ? 'book__more--hidden' : 'book__summary--more'}
                                    onClick={handleVisibleSummary}
                                >
                                    Show more&nbsp;
                                    <i className="fa-solid fa-angle-down"></i>
                                </span>
                            </summary>

                            <ul className="book__tags">
                                {book.tags.map((tag, index) =>
                                    <li key={index} className="book__tag">
                                        <Link to={`/genres/${tag.toLowerCase().split(' ').join('-')}`}>
                                            {tag}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                            <table className="book__table">
                                <tbody className="book__table--tbody">
                                    <tr className="book__table--row">
                                        <th className="book__table--heading">This edition</th>
                                    </tr>
                                    <tr className="book__table--row">
                                        <td className="book__table--data">
                                            Pages
                                        </td>
                                        <td className="book__table--data">
                                            {book.pages}
                                        </td>
                                    </tr>
                                    <tr className="book__table--row">
                                        <td className="book__table--data">
                                            Language
                                        </td>
                                        <td className="book__table--data">
                                            {book.language}
                                        </td>
                                    </tr>
                                    <tr className="book__table--row">
                                        <td className="book__table--data">
                                            Published
                                        </td>
                                        <td className="book__table--data">
                                            {new Date(book.datePublished).toDateString()}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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