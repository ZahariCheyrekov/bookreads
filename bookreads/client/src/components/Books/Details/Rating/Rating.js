import { useState } from 'react';

import './Rating.css';

const stars = [1, 2, 3, 4, 5];

const Rating = ({ setParentRating, showRateTitle, small }) => {
    const [rating, setRating] = useState(null);
    const [hoverStar, setHoverStar] = useState(null);

    return (
        <article className={`rating ${small && 'small'}`}>
            <span className="rating__stars">
                {stars.map(star =>
                    <i
                        className=
                        {`fa-solid fa-star 
                        ${star - 1 < (hoverStar || rating) ? 'rated' : 'unrated'} 
                        ${small && 'small'}`
                        }
                        key={star}
                        onClick={() => {
                            setRating(star);
                            setParentRating(star);
                        }}
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