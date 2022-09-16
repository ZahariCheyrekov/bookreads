import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useBook } from '../../../hooks/useBook';
import { useUserReview } from '../../../hooks/useUserReview';
import { AuthContext } from '../../../../../contexts/AuthContext';

import { notify } from '../../../../../lib/toastify';
import { createPost } from '../../../../../api/postAPI';
import { createReview, deleteReviewById } from '../../../api/reviewAPI';

import { RATED_A_BOOK, REVIEWED_A_BOOK } from '../../../../../constants/actionType';
import { REVIEW_DELETED } from '../../../constants/messages';

import Rating from '../../Details/Rating/Rating';

import './CreateReview.css';

const CreateReview = () => {
    const navigate = useNavigate();
    const currentUserReview = useUserReview();
    const book = useBook();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [reviewContent, setReviewContent] = useState('');
    const [spoilers, setSpoilers] = useState(false);
    const [rating, setParentRating] = useState(0);

    useEffect(() => {
        setSpoilers(currentUserReview?.spoilers);
        setParentRating(currentUserReview?.rating);
        setReviewContent(currentUserReview?.reviewContent.join(' '));
    }, [currentUserReview]);

    const handleSpoilers = () => {
        setSpoilers(prevState => !prevState);
    }

    const handleReviewContent = (ev) => {
        setReviewContent(ev.target.value);
    }

    const handleReview = () => {
        const userData = {
            name: user?.result?.name,
            id: user?.result?._id,
            imageUrl: user?.result?.imageUrl
        }

        const bookData = {
            bookId: book._id,
            user: userData,
            spoilers,
            rating,
            reviewContent: reviewContent.trim().split(/\n+/)
        }

        const postBookData = {
            bookId: id,
            bookAuthor: book.author,
            bookTitle: book.title,
            bookDescription: book.description,
            bookCoverUrl: book.bookCoverUrl,
            spoilers,
            rating,
            reviewContent: reviewContent.trim().split(/\n+/)
        }

        createReview(book._id, bookData);

        let status = '';
        if (rating !== 0 && reviewContent === '') {
            status = RATED_A_BOOK;
        } else if (reviewContent !== '') {
            status = REVIEWED_A_BOOK;
        }

        createPost({ status, postBookData, userData, createdAt: new Date() });
        navigate(`/books/${id}`);
    }

    const handleDeleteReview = () => {
        deleteReviewById(currentUserReview._id);
        navigate(`/books/${id}`);
        notify(REVIEW_DELETED);
    }

    return (
        <main className="main">
            {book &&
                <div className="create__review__wrapper">
                    <Link to={`/books/${id}`} className="create__review__book--link">
                        <h1 className="create__review__title">{book.title}</h1>
                    </Link>

                    <section className="create__review__book">
                        <article className="create__review__book--info">
                            <article className="create__review__book--image">
                                <img src={book.bookCoverUrl} alt={book.title} />
                            </article>

                            <summary className="create__review__book--summary">
                                <Link to={`/books/${id}`}>
                                    <h4 className="create__review__book--title">
                                        {book.title}
                                    </h4>
                                </Link>
                                <span className="create__review__book--author">
                                    by {book.author}
                                </span>
                            </summary>
                        </article>
                        <hr className="create__review__hr" />
                    </section>
                    <section className="create__review__write">
                        <span className="create__review__rating--user">
                            <h4 className="create__review__rating--title">My rating:</h4>

                            <Rating
                                rating={currentUserReview?.rating}
                                setParentRating={setParentRating}
                                showRateTitle={false}
                                small={true}
                            />
                        </span>
                    </section>
                    <hr className="create__review__hr" />

                    <section className="create__review__section--form">
                        <h4 className="create__review__form--question">What do you think?</h4>

                        <form className="create__review__form">
                            <textarea
                                className="create__review__form--textarea"
                                value={reviewContent}
                                onChange={handleReviewContent}
                            />
                        </form>

                        <article className="create__review__spoilers">
                            <input
                                className="spoilers--hide"
                                type="checkbox"
                                onClick={handleSpoilers}
                            />
                            <span className="create__review__spoilers--span">
                                Hide entire review because of spoilers
                            </span>
                        </article>
                        <hr className="create__review__hr" />

                        <section className="create__review__save">
                            <button
                                className="create__review__button create__review__button--save"
                                onClick={handleReview}
                            >
                                Save
                            </button>
                            {currentUserReview &&
                                <button
                                    className="review__delete--button"
                                    onClick={handleDeleteReview}
                                >
                                    Delete review
                                </button>
                            }
                        </section>
                    </section>
                </div>
            }
        </main>
    );
}

export default CreateReview;