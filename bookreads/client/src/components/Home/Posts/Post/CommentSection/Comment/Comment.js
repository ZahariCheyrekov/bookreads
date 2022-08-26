import { Link } from 'react-router-dom';

import './Comment.css';

const Comment = ({ comment, postId }) => {
    console.log(comment,postId)
    
    const handleDelete = () => {

    }

    return (
        <li className="comment__ul--item">
            <article className="comment__article">
                <h5 className="comment__author">
                    <Link to={`/user/
                ${comment.creatorName.split(' ').join('').toLowerCase()}/
                ${comment.creatorId}`}
                    >
                        {comment.creatorName}
                    </Link>
                </h5>
                <button
                    className="comment__button--delete"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </article>
            {comment.comment.map((paragraph, index) =>
                <p
                    key={index}
                    className="comment__paragraph"
                >
                    {paragraph}
                </p>
            )}
        </li>
    );
}

export default Comment;