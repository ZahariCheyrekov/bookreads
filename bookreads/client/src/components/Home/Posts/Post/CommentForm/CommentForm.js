import { useContext, useState } from 'react';
import { AuthContext } from '../../../../../contexts/AuthContext';

import User from '../User/User';

import './CommentForm.css';

const CommentForm = () => {
    const { user } = useContext(AuthContext);
    const [showCommentButton, setShowCommentButton] = useState(false);

    const handleClick = () => {
        setShowCommentButton(true);
    }

    return (
        <article className="post__article--comment">
            <User user={user?.result?.name} creatorId={user?.result?._id} />
            <form className="post__form">
                <textarea className="post__form--area" placeholder="Write a comment" onClick={handleClick} />
                {showCommentButton &&
                    <button className="post__form--button">Comment</button>
                }
            </form>
        </article>
    );
}

export default CommentForm;