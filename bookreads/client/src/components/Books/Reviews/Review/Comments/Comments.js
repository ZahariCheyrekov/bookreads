import { useContext, useState } from 'react';
import uuid from 'react-uuid';

import { AuthContext } from '../../../../../contexts/AuthContext';
import { commentOnReview } from '../../../../../api/requester';

import Comment from './Comment/Comment';

import './Comments.css';

const Comments = ({ review, comments }) => {
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('');
    const [visibleButton, setVisibleButton] = useState(false);
    const [reviewComments, setReviewComments] = useState(comments);

    const handleComment = async (ev) => {
        ev.preventDefault();

        if (visibleButton) {
            const commentContent = comment.trim().split(/\n+/);

            const commentData = {
                user: review.user,
                commentContent,
                createdAt: new Date()
            }
            await commentOnReview(review._id, commentData);
            setReviewComments([...reviewComments, commentData]);

            setComment('');
            setVisibleButton(false);
            ev.target.parentNode.reset();
        }
    }

    const handleChange = (ev) => {
        setComment(ev.target.value);

        if (ev.target.value.trim() !== '') {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    }

    return (
        <section className="review__comments">
            <hr className="hr__divider" />
            <section className="review__section--comments">
                <ul className="review__comments--list">
                    {reviewComments.map(currentComment =>
                        <Comment
                            key={uuid()}
                            comment={currentComment}
                        />
                    )}
                </ul>
            </section>
            <section className="review__section--write">
                <img
                    className="review__user__comment--img"
                    src={user?.result?.imageUrl}
                    alt={user?.result?.name}
                />
                <form className="review__form">
                    <textarea
                        className="review__form--textarea"
                        placeholder="Add a comment"
                        onChange={handleChange}
                    />
                    {visibleButton &&
                        <button
                            className="review__form--btn"
                            onClick={handleComment}
                        >
                            Post
                        </button>
                    }
                </form>
            </section>
        </section>
    );
}

export default Comments;