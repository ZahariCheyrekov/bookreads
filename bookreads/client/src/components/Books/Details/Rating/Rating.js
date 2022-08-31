import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { createReview } from '../../../../api/reviewAPI';
import { AuthContext } from '../../../../contexts/AuthContext';
import { getRatingByUser } from '../../../../services/review';

import './Rating.css';

const stars = [1, 2, 3, 4, 5];

const Rating = ({ setParentRating, showRateTitle, small }) => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(null);
    const [hoverStar, setHoverStar] = useState(null);
    const [userRating, setUserRating] = useState(0);

    useEffect(() => {
        const getUserRating = async () => {
            const currentUserRating = await getRatingByUser(id, user.result._id);
            setUserRating(currentUserRating);
        }
        getUserRating();
    }, [id, user?.result?._id]);

    const handleRating = (star) => {
        setRating(star);

        const reviewData = {
            bookId: id,
            user: {
                name: user.result.name,
                id: user.result._id,
                imageUrl: user.result.imageUrl
            },
            rating
        }
        createReview(id, reviewData);
    }

    return (
        <article className={`rating ${small && 'small'}`}>
            <span className="rating__stars">
                {stars.map(star =>
                    <i
                        className=
                        {`fa-solid fa-star ${star - 1 < (hoverStar || rating || userRating) ? 'rated' : 'unrated'} ${small && 'small'}`}
                        key={star}
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoverStar(star)}
                        onMouseLeave={() => setHoverStar(null)}
                    />
                )}
            </span>
            {
                showRateTitle !== false
                    ? <h4 className="rating__title">
                        Rate this book
                    </h4>
                    : ''
            }
        </article >
    );
}

export default Rating;