import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import Rating from '../Details/Rating/Rating';
import Review from './Review/Review';

import defaultUserPhoto from '../../../assets/default-user-photo.png';
import { getReviews } from '../../../services/review';

import './Reviews.css';

const Reviews = ({ book }) => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getReviews(id);
            setReviews(reviews);
        }
        fetchReviews();
    }, [id]);

    return (
        <section className="reviews">
            <h3 className="reviews__title">Reviews & Ratings</h3>

            <article className="reviews__user">
                <Link to={`/user/${user?.result?.name.split(' ').join('')
                    .toLowerCase()}/${user?.result?.googleId || user?.result?._id}`}>
                    <article className="profile__section--article">
                        <img src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                            alt={`${user?.result?.name}`}
                        />
                    </article>
                </Link>

                <h2 className="reviews__user--question">What do you think?</h2>
                <section className="reviews__review--action">
                    <Rating />
                    <Link to={`/review/edit/${id}`} book={book}>
                        <button className="reviews__user--button">Write a Review</button>
                    </Link>
                </section>
            </article>
            <hr className="hr__divider" />

            <section className="reviews">
                <ul className="reviews__list">
                    {reviews.map(review =>
                        <Review
                            key={review?._id}
                            review={review}
                        />
                    )}
                </ul>
            </section>
        </section >
    );
}

export default Reviews;