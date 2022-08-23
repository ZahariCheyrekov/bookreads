import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBook } from '../../../../services/book';
import Rating from '../../Details/Rating/Rating';

import './Review.css';

const Review = () => {
    const { id } = useParams();
    const [book, setBook] = useState();
    const [setSpoilers] = useState(false);
    const [setParentRating] = useState(0);

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

    return (
        <main className="main">
            {book &&
                <div className="review__wrapper">
                    <Link to={`/books/${id}`} className="review__book--link">
                        <h1 className="review__title">{book.title}</h1>
                    </Link>

                    <section className="review__book">
                        <article className="review__book--info">
                            <article className="review__book--image">
                                <img src={book.bookCoverUrl} alt={book.title} />
                            </article>

                            <summary className="review__book--summary">
                                <Link to={`/books/${id}`}>
                                    <h4 className="review__book--title">
                                        {book.title}
                                    </h4>
                                </Link>
                                <span className="review__book--author">
                                    by {book.author}
                                </span>
                            </summary>
                        </article>
                        <hr className="review__hr" />
                    </section>
                    <section className="review__write">
                        <span className="review__rating--user">
                            <h4 className="review__rating--title">My rating:</h4>
                            <Rating setParentRating={setParentRating} showRateTitle={false} small={true} />
                        </span>
                    </section>
                    <hr className="review__hr" />
                    <section className="review__section--form">
                        <h4 className="review__form--question">What do you think?</h4>

                        <form className="review__form">
                            <textarea className="review__form--textarea" />
                        </form>

                        <article className="review__spoilers">
                            <input className="spoilers--hide" type="checkbox" onClick={handleSpoilers} />
                            <span className="review__spoilers--span">
                                Hide entire review because of spoilers
                            </span>
                        </article>
                        <hr className="review__hr" />

                        <section className="review__save">
                            <Link to={`/books/${id}`}>
                                <button className="review__button review__button--save">
                                    Save
                                </button>
                            </Link>
                        </section>
                    </section>
                </div>
            }
        </main>
    );
}

export default Review;