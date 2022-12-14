import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { createReview } from '../../../api/reviewAPI';
import { AuthContext } from '../../../../../contexts/AuthContext';
import { getUserReview } from '../../../services/review';

import './Rating.css';

const stars = [1, 2, 3, 4, 5];

const Rating = ({ rating, setParentRating, showRateTitle, small }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [currentRating, setCurrentRating] = useState(rating);
    const [hoverStar, setHoverStar] = useState(null);

    useEffect(() => {
        if (user) {
            const fetchUserReview = async () => {
                const currentReview = await getUserReview(id, user?.result._id);
                if (currentReview) {
                    setCurrentRating(currentReview.rating);
                }
            }
            fetchUserReview();
        }
    }, [id, user]);

    const handleRating = (star) => {
        if (user) {
            setCurrentRating(star);
            if (setParentRating) {
                setParentRating(star);
            }

            const reviewData = {
                bookId: id,
                user: {
                    name: user.result.name,
                    id: user.result._id,
                    imageUrl: user.result.imageUrl
                },
                rating: star
            }
            createReview(id, reviewData);
        } else {
            navigate('/user/signin');
        }
    }

    return (
        <article className={`rating ${small && 'small'}`}>
            <span className="rating__stars">
                {stars.map(star =>
                    <i
                        className=
                        {`fa-solid fa-star ${star - 1 < (hoverStar || currentRating) ? 'rated' : 'unrated'} ${small && 'small'}`}
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