import { Link } from 'react-router-dom';

import './Comment.css';

const Comment = ({ comment }) => {
    return (
        <li className="review__user--comment">
            <article className="review__user__comment--img">
                <Link to={`/user/${comment.user.name.split(' ').join('-').toLowerCase()}/${comment.user.id}`}>
                    <img
                        className="review__user__comment--img"
                        src={comment.user.imageUrl}
                        alt={comment.user.name}
                    />
                </Link>
            </article>
            <article className="review__user__comment--content">
                <Link to={`/user/${comment.user.name.split(' ').join('-').toLowerCase()}/${comment.user.id}`}>
                    <h4 className="review__user__comment--name">
                        {comment.user.name}
                    </h4>
                </Link>
                <summary className="review__user__comment--summray">
                    {comment.comment.map(paragraph =>
                        <p className="review__comment__summary--paragraph">
                            {paragraph}
                        </p>
                    )}
                </summary>
            </article>
        </li>
    );
}

export default Comment;