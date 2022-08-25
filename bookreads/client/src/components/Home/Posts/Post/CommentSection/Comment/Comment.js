import { Link } from 'react-router-dom';

import './Comment.css';

const Comment = ({ comment }) => {
    console.log(comment)
    return (
        <li className="comment__ul--item">
            <h5 className="comment__author">
                <Link to={`/user/
                ${comment.creatorName.split(' ').join('').toLowerCase()}/
                ${comment.creatorId}`}
                >
                    {comment.creatorName}
                </Link>
            </h5>
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