import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useBook } from '../../../hooks/useBook';

import { notify } from '../../../../../lib/toastify';

import { deleteBook } from '../../../api/bookAPI';
import { addBookToUserShelve } from '../../../../../api/userAPI';

import { AuthContext } from '../../../../../contexts/AuthContext';

import { CURRENTLY_READING_SHELVE, READ_SHELVE, WANT_TO_READ_SHELVE } from '../../../../../constants/shelves';
import { USER_DELETED_A_BOOK } from '../../../../../constants/notifications';

import Rating from '../Rating/Rating';

import './Aside.css';

const Aside = ({ isOwner }) => {
    const navigate = useNavigate();
    const book = useBook();
    const { user } = useContext(AuthContext);
    const [visibleBookOptions, setVisibleBookOptions] = useState(false);

    const handleDelete = () => {
        deleteBook(book?._id);
        navigate('/');
        notify(USER_DELETED_A_BOOK);
    }

    const handleBookShelve = (shelveName) => {
        setVisibleBookOptions(false);

        const bookData = {
            id: book._id,
            title: book.title,
            author: book.author,
            cover: book.bookCoverUrl
        }

        addBookToUserShelve(user.result._id, shelveName, bookData);
    }

    return (
        <section className="section__aside">
            <aside className="aside__book--content">
                <article className="aside__book--article">
                    <img src={book?.bookCoverUrl} alt={book?.title} />
                </article>
                {isOwner && (
                    <>
                        <Link to={`/books/${book?._id}/edit`} className="aside__book--link">
                            <button className="aside__book--button">
                                Edit book
                            </button>
                        </Link>
                        <button
                            className="aside__book--button book__delete--button"
                            onClick={handleDelete}
                        >
                            Delete book
                        </button>
                    </>
                )}
                <button className="aside__book--button book__button--status">
                    Want to read
                    <i className="fa-solid fa-angle-down actions"
                        onClick={() => setVisibleBookOptions(true)}
                    />
                </button>
                <Rating />

                <section className={`aside__book--options ${visibleBookOptions && 'active'}`}>
                    <h4 className="aside__book__options--title">
                        Choose a shelf for this book:
                    </h4>

                    <article className="aside__options--list">
                        <button
                            className="aside__book__option book__option--want"
                            onClick={() => handleBookShelve(WANT_TO_READ_SHELVE)}
                        >
                            Want to Read
                        </button>
                        <button
                            className="aside__book__option book__option--reading"
                            onClick={() => handleBookShelve(CURRENTLY_READING_SHELVE)}
                        >
                            Currently Reading
                        </button>
                        <button
                            className="aside__book__option book__option--read"
                            onClick={() => handleBookShelve(READ_SHELVE)}
                        >
                            Read
                        </button>

                        <button
                            className="aside__book__option book__option--close"
                            onClick={() => setVisibleBookOptions(false)}
                        >
                            Close
                        </button>
                    </article>
                </section>
            </aside >
        </section >
    );
}

export default Aside;