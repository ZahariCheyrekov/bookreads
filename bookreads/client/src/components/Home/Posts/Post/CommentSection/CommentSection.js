import Comment from './Comment/Comment';

import './CommentSection.css';

const CommentSection = ({ comments }) => {
    return (
        <>
            {comments.length > 0 &&
                < section className="comment__section">
                    <ul className="comment__ul">
                        {comments.map(comment =>
                            <Comment
                                key={Math.random()}
                                comment={comment}
                            />
                        )}
                    </ul>
                </section >
            }
        </>
    );
}

export default CommentSection;