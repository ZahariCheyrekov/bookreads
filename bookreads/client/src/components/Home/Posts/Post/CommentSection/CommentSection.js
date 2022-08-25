import Comment from './Comment/Comment';

import './CommentSection.css';

const CommentSection = ({ comments }) => {
    return (
        <>
            {comments.length > 0 &&
                < section className="comment__section">
                    <ul className="comment__ul">
                        {comments.map(comment =>
                            <li
                                key={comments.length + 1 * Math.random()}
                                className="comment__ul--item"
                            >
                                <Comment comment={comment} />
                            </li>
                        )}
                    </ul>
                </section >
            }
        </>
    );
}

export default CommentSection;