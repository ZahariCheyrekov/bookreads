import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useBook } from '../../hooks/useBook';

import { notify } from '../../../../lib/toastify';

import { getUserBookStatus } from '../../utils/getUserBookStatus';
import { getUserById } from '../../../../services/user';
import { createPost } from '../../../../api/postAPI'
import { addBookToUserShelve, deleteBook } from '../../api/bookAPI';

import { AuthContext } from '../../../../contexts/AuthContext';

import { USER_DELETED_A_BOOK } from '../../../../constants/messages';
import { FINISHED_BOOK, IS_READING, WANTS_TO_READ, WANT_TO_READ } from '../../constants/bookStatus';
import { CURRENTLY_READING_SHELVE, READ_SHELVE, WANT_TO_READ_SHELVE } from '../../constants/shelves';

import Rating from './Rating/Rating';

import './Aside.css';

const Aside = ({ isOwner }) => {
    const navigate = useNavigate();
    const book = useBook();
    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [visibleBookOptions, setVisibleBookOptions] = useState(false);
    const [bookShelveStatus, setBookShelveStatus] = useState('');

    useEffect(() => {
        if (user) {
            const fetchCurrentUser = async () => {
                const currentUser = await getUserById(user?.result._id);
                setCurrentUser(currentUser);
            }
            fetchCurrentUser();
        }
    }, [user]);

    useEffect(() => {
        if (currentUser && book) {
            const status = getUserBookStatus(currentUser, book._id);
            setBookShelveStatus(status);
        }
    }, [currentUser, book]);

    const handleDelete = () => {
        deleteBook(book?._id);
        navigate('/');
        notify(USER_DELETED_A_BOOK);
    }

    const handleBookShelve = (ev, shelveName) => {
        setVisibleBookOptions(false);
        setBookShelveStatus(ev.target.textContent)

        const bookData = {
            id: book._id,
            title: book.title,
            author: book.author,
            cover: book.bookCoverUrl
        }

        const postBookData = {
            bookId: book._id,
            bookAuthor: book.author,
            bookTitle: book.title,
            bookDescription: book.description,
            bookCoverUrl: book.bookCoverUrl
        }

        const userData = {
            name: user.result.name,
            id: user.result._id,
            imageUrl: user.result.imageUrl
        }

        let status;
        switch (shelveName) {
            case ('read'):
                status = FINISHED_BOOK;
                break;
            case ('currentlyReading'):
                status = IS_READING;
                break;
            case ('toRead'):
                status = WANTS_TO_READ;
                break;
            default:
                break;
        }

        createPost({ status, postBookData, userData, createdAt: new Date() });
        addBookToUserShelve(user.result._id, shelveName, bookData);
    }

    const handleVisibleBookOptions = () => {
        if (user) {
            setVisibleBookOptions(true);
        } else {
            navigate('/user/signin');
        }
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
                    {user
                        ? bookShelveStatus
                        : WANT_TO_READ
                    }
                    <i className="fa-solid fa-angle-down actions"
                        onClick={handleVisibleBookOptions}
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
                            onClick={(ev) => handleBookShelve(ev, WANT_TO_READ_SHELVE)}
                        >
                            Want to Read
                        </button>
                        <button
                            className="aside__book__option book__option--reading"
                            onClick={(ev) => handleBookShelve(ev, CURRENTLY_READING_SHELVE)}
                        >
                            Currently Reading
                        </button>
                        <button
                            className="aside__book__option book__option--read"
                            onClick={(ev) => handleBookShelve(ev, READ_SHELVE)}
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