import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { deleteComment } from '../../../../../../api/requester';
import { AuthContext } from '../../../../../../contexts/AuthContext';

import './Comment.css';

const Comment = ({ comment, comments, setComments, postId }) => {
    const { user } = useContext(AuthContext);
    const [showDeleteButton] = useState(comment.creatorId === user.result._id);
    const [visibleText, setVisibleText] = useState(false);
    const [visibleButton] = useState(comment.comment.join('').length >= 270);

    const handleDelete = () => {
        deleteComment(postId, comment.commentId);
        const commentsAfterDelete = comments.filter(current => current.commentId !== comment.commentId);
        setComments([...commentsAfterDelete]);
    }

    const handleClick = () => {
        setVisibleText(prevState => !prevState);
    }

    return (
        <li className="comment__ul--item">
            <article className="comment__article">
                <h5 className="comment__author">
                    <Link to={`/user/${comment.creatorName.split(' ').join('').toLowerCase()}/${comment.creatorId}`}>
                        {comment.creatorName}
                    </Link>
                </h5>

                {showDeleteButton &&
                    <button
                        className="comment__button--delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                }
            </article>
            <section className="comment__body">
                <article className={`comment__paragraphs ${visibleText && 'visible'}`}>
                    {comment.comment.map((paragraph, index) =>
                        <p
                            key={index}
                            className="comment__paragraph"
                        >
                            {paragraph}
                        </p>
                    )}
                </article>
                {visibleButton &&
                    <button className="comment__button" onClick={handleClick}>
                        {visibleText ? 'Less' : 'More'}
                    </button>
                }
            </section>
        </li >
    );
}

export default Comment;