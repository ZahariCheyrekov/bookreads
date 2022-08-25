import { useContext, useState } from 'react';
import { AuthContext } from '../../../../../contexts/AuthContext';
import { createComment } from '../../../../../services/post';

import User from '../User/User';

import './CommentForm.css';

const CommentForm = ({ postId, comments, setComments }) => {
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('');
    const [commentButtonDisabled, setCommentButtonDisabled] = useState(true);
    const [showCommentButton, setShowCommentButton] = useState(false);

    const handleClick = () => {
        setShowCommentButton(true);
    }

    const handleChange = (ev) => {
        setComment(ev.target.value);

        if (ev.target.value.trim() !== '') {
            setCommentButtonDisabled(false);
        } else {
            setCommentButtonDisabled(true);
        }
    }

    const handleComment = async (ev) => {
        ev.preventDefault();

        const commentData = {
            creatorId: user?.result?._id,
            comment,
            createdAt: new Date()
        };

        await createComment(postId, commentData);
        setComments([...comments, commentData]);
    }

    return (
        <article className="post__article--comment">
            <User user={user?.result?.name} creatorId={user?.result?._id} />
            <form className="post__form">
                <textarea
                    className="post__form--area"
                    placeholder="Write a comment"
                    onChange={handleChange}
                    onClick={handleClick}
                />
                {showCommentButton &&
                    <button
                        type="submit"
                        className={`post__form--button ${commentButtonDisabled ? 'disabled' : 'active'}`}
                        onClick={handleComment}
                        disabled={commentButtonDisabled}
                    >
                        Comment
                    </button>
                }
            </form>
        </article>
    );
}

export default CommentForm;