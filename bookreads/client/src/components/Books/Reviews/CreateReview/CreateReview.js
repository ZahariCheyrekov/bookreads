import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/AuthContext';

import { getBook } from '../../../../services/book';
import { createReview } from '../../../../api/requester';
import Rating from '../../Details/Rating/Rating';

import './CreateReview.css';

const CreateReview = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [book, setBook] = useState();
    const [reviewContent, setReviewContent] = useState('');
    const [spoilers, setSpoilers] = useState(false);
    const [rating, setParentRating] = useState(0);

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id);
            setBook(book);
        }
        fetchBook();
    }, [id]);

    const handleSpoilers = () => {
        setSpoilers(prevState => !prevState);
    }
    const handleReviewContent = (ev) => {
        setReviewContent(ev.target.value);
    }

    const handleReview = () => {
        const bookData = {
            bookId: book._id,
            user: {
                name: user?.result?.name,
                id: user?.result?._id,
                imageUrl: user?.result?.imageUrl,
            },
            spoilers,
            rating,
            reviewContent
        }
        createReview(book._id, bookData);
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
                        </section>
                    </section>
                </div>
            }
        </main>
    );
}

export default CreateReview;