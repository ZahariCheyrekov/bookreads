import { useContext, useState } from 'react';

import { AuthContext } from '../../../../../contexts/AuthContext';
import { createCommentOnReview } from '../../../../../services/review';

import './Comments.css';

const Comments = ({ review, comments, setComments }) => {
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('');

    const handleComment = () => {
        const commentData = {
            user: review.user,
            comment,
            createdAt: new Date()
        }
        createCommentOnReview(review._id, commentData);
    }

    const handleChange = (ev) => {
        setComment(ev.target.value);
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
                <form className="areview__form">
                    <textarea
                        className="review__form--textarea"
                        onChange={handleChange}
                    />
                    <button
                        className="review__form--btn"
                        onClick={handleComment}
                    >
                        Post comment
                    </button>
                </form>
            </section>
        </section>
    );
}

export default Comments;