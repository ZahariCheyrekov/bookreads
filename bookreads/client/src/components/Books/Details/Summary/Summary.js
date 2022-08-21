import { useState } from 'react';

import './Summary.css';

const Summary = ({ description }) => {
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
            <span className={visibleSummary ? 'book__summary--less' : 'book__summary--more'}
                onClick={handleVisibleSummary}
            >
                {visibleSummary ? 'Show less' : 'Show more'}
                &nbsp;
                <i className={`fa-solid fa-angle-down ${visibleSummary ? 'up-arrow' : 'down-arrow'}`}></i>
            </span>
        </summary>
    );
}

export default Summary;