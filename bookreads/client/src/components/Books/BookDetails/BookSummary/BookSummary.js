import { useState } from 'react';

import './BookSummary.css';

const BookSummary = ({ description }) => {
    const [visibleSummary, setVisibleSummary] = useState(false);

    const handleVisibleSummary = () => {
        setVisibleSummary(prevState => !prevState);
    }

    return (
        <summary className={visibleSummary ? 'book__summary--visible' : 'book__summary'}>
            {description.map((paragraph, index) =>
                <p key={index} className="book__summary--paragraph">
                    {paragraph}
                </p>
            )}
            <span className={visibleSummary ? 'book__more--hidden' : 'book__summary--more'}
                onClick={handleVisibleSummary}
            >
                Show more&nbsp;
                <i className="fa-solid fa-angle-down"></i>
            </span>
        </summary>
    );
}

export default BookSummary;