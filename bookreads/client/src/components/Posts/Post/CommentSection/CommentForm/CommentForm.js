import { useContext, useState } from 'react';
import uuid from 'react-uuid';

import { AuthContext } from '../../../../../contexts/AuthContext';
import { createComment } from '../../../../../services/post';

import User from '../../User/User';

import './CommentForm.css';

const CommentForm = ({ postId, currentComments, setCurrentComments }) => {
    const { user } = useContext(AuthContext);
    const [userData] = useState({ creatorId: user?.result._id, creatorName: user?.result.name })
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
            creatorId: userData.creatorId,
            creatorName: userData.creatorName,
            comment: comment.trim().split(/\n+/),
            createdAt: new Date(),
            commentId: uuid()
        };

        ev.target.parentNode.reset();

        setCurrentComments([...currentComments, commentData]);
        await createComment(postId, commentData);

        setComment('');
        setCommentButtonDisabled(true);
    }

    return (
        <article className="post__article--comment">
            <User />
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