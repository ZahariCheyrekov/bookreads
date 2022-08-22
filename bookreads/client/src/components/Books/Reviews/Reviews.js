import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import Rating from '../Details/Rating/Rating';
import defaultUserPhoto from '../../../assets/default-user-photo.png';

import './Reviews.css';

const Reviews = () => {
    const { user } = useContext(AuthContext);

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
                    <button className="reviews__user--button">Write a Review</button>
                </section>
            </article>
            <hr className="hr__divider" />
        </section >
    );
}

export default Reviews;