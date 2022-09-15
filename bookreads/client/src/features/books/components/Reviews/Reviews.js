import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../../../contexts//AuthContext';

import Rating from '../Details/Rating/Rating';
import Review from './Review/Review';

import defaultUserPhoto from '../../../../assets/default-user-photo.png';

import { getUserLink } from '../../../../utils/getUserLink';
import { ReviewContext } from '../../contexts/ReviewContext';

import './Reviews.css';

const Reviews = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { reviews, userReview } = useContext(ReviewContext);

    return (
        <section className="reviews">
            <h3 className="reviews__title">
                Reviews & Ratings
            </h3>
            {userReview ?
                <article className="reviews__user__review--article">
                    <h4 className="reviews__user__review--title">
                        My Review
                    </h4>
                    <Review
                        key={userReview?._id}
                        review={userReview}
                        userReview={true}
                    />
                </article>
                :
                <article className="reviews__user">
                    <Link to={getUserLink(user.result.name, user.result._id)}>
                        <article className="profile__section--article">
                            <img src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                                alt={`${user?.result?.name}`}
                            />
                        </article>
                    </Link>

                    <h2 className="reviews__user--question">
                        What do you think?
                    </h2>
                    <section className="reviews__review--action">
                        <Rating />
                        <Link to={`/review/edit/${id}`}>
                            <button className="reviews__user--button">
                                Write a Review
                            </button>
                        </Link>
                    </section>
                </article>
            }
            <hr className="hr__divider" />

            <section className="reviews">
                <ul className="reviews__list">
                    {reviews.filter(review => review.user.id !== user.result._id)?.map(review =>
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