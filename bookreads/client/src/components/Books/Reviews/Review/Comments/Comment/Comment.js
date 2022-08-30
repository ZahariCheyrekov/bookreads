import { useState } from 'react';

import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { deleteReviewComment } from '../../../../../../api/reviewAPI';
import { getUserLink } from '../../../../../../utils/getUserLink';

import './Comment.css';

const Comment = ({ reveiewId, comment, reviewComments, setReviewComments, setComments }) => {
    const [hasButton] = useState(comment.commentContent.join(' ').length >= 300);
    const [showSummary, setShowSummary] = useState(false);

    const handleClick = () => {
        setShowSummary(prevState => !prevState);
    }

    const handleDeleteComment = () => {
        const indexOfComment = reviewComments.findIndex(currentComment => currentComment.commentId === comment.commentId);
        const commentToRemoveId = reviewComments[indexOfComment].commentId;

        const filteredComments = reviewComments.filter(currentComment => currentComment.commentId !== commentToRemoveId);
        setReviewComments(filteredComments);
        setComments(filteredComments);

        deleteReviewComment(reveiewId, commentToRemoveId);
    }

    return (
        <li className="review__user--comment">
            <article className="review__user__comment--img" >
                <Link to={getUserLink(comment.user.name, comment.user.id)}>
                    <img
                        className="review__user__comment--img"
                        src={comment.user.imageUrl}
                        alt={comment.user.name}
                    />
                </Link>
            </article >
            <article className="review__user__comment--content">
                <section className="review__user__comment--section">
                    <h4 className="review__user__comment--name">
                        <Link to={getUserLink(comment.user.name, comment.user.id)}>
                            {comment.user.name}
                        </Link>
                    </h4>
                    <button
                        className="review__user__comment--delete"
                        onClick={handleDeleteComment}
                    >
                        Delete
                    </button>
                </section>
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