import { useContext, useState } from 'react';

import { AuthContext } from '../../../../../contexts/AuthContext';
import { commentOnReview } from '../../../../../api/requester';

import './Comments.css';

const Comments = ({ review, comments, setComments }) => {
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('');
    const [visibleButton, setVisibleButton] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    const handleComment = (ev) => {
        ev.preventDefault();

        if (!disabledButton) {
            const commentData = {
                user: review.user,
                comment: comment.trim(),
                createdAt: new Date()
            }
            commentOnReview(review._id, commentData);

            setComment('');
            setDisabledButton(true);
            ev.target.parentNode.reset();
        }
    }

    const handleChange = (ev) => {
        setComment(ev.target.value);

        if (ev.target.value.trim() !== '') {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    }

    const handleVisibleButton = () => {
        setVisibleButton(true);
    }

    return (
        <section className="review__comments">
            <hr className="hr__divider" />
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
                        onClick={handleVisibleButton}
                    />
                    {visibleButton &&
                        <button
                            className={`review__form--btn ${disabledButton ? 'disabled' : 'active'}`}
                            onClick={handleComment}
                            disabled={disabledButton}
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