import { useState } from 'react';

import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import './Comment.css';

const Comment = ({ comment }) => {
    const [hasButton] = useState(comment.commentContent.join('').length >= 300);
    const [showSummary, setShowSummary] = useState(false);

    const handleClick = () => {
        setShowSummary(prevState => !prevState);
    }

    return (
        <li className="review__user--comment">
            <article className="review__user__comment--img" >
                <Link to={`/user/${comment.user.name.split(' ').join('-').toLowerCase()}/${comment.user.id}`}>
                    <img
                        className="review__user__comment--img"
                        src={comment.user.imageUrl}
                        alt={comment.user.name}
                    />
                </Link>
            </article >
            <article className="review__user__comment--content">
                <h4 className="review__user__comment--name">
                    <Link to={`/user/${comment.user.name.split(' ').join('-').toLowerCase()}/${comment.user.id}`}>
                        {comment.user.name}
                    </Link>
                </h4>
                <summary className={`review__user__comment--summray ${showSummary ? 'active' : ''}`}>
                    {comment.commentContent.map(paragraph =>
                        <p
                            key={uuid()}
                            className="review__comment__summary--paragraph"
                        >
                            {paragraph}
                        </p>
                    )}
                </summary>
                {hasButton ?
                    <button className="review__comment__summary--btn" onClick={handleClick}>
                        {showSummary ? 'Less' : 'More'}&nbsp;
                        <i className={`fa-solid fa-angle-down down-arrow ${showSummary ? 'up' : ''}`} />
                    </button>
                    : null
                }
            </article>
        </li >
    );
}

export default Comment;