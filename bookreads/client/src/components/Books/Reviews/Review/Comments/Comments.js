import { useContext, useState } from 'react';

import { AuthContext } from '../../../../../contexts/AuthContext';
import { commentOnReview } from '../../../../../api/requester';

import './Comments.css';

const Comments = ({ review, comments, setComments }) => {
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('');

    const handleComment = (ev) => {
        ev.preventDefault();

        const commentData = {
            user: review.user,
            comment,
            createdAt: new Date()
        }
        commentOnReview(review._id, commentData);

        setComment('');
        ev.target.parentNode.reset();
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
                <form className="review__form">
                    <textarea
                        className="review__form--textarea"
                        placeholder="Add a comment"
                        onChange={handleChange}
                    />
                    <button
                        className="review__form--btn"
                        onClick={handleComment}
                    >
                        Post
                    </button>
                </form>
            </section>
        </section>
    );
}

export default Comments;