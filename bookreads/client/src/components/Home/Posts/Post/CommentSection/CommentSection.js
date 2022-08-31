import { useState } from 'react';
import uuid from 'react-uuid';

import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm';

import './CommentSection.css';

const CommentSection = ({ postId, postCreatorId, comments }) => {
    const [currentComments, setCurrentComments] = useState(comments);

    return (
        <>
            {comments?.length > 0 &&
                < section className="comment__section">
                    <ul className="comment__ul">
                        {currentComments.map(comment =>
                            <Comment
                                key={uuid()}
                                comment={comment}
                                currentComments={currentComments}
                                setCurrentComments={setCurrentComments}
                                postId={postId}
                                postCreatorId={postCreatorId}
                            />
                        )}
                    </ul>
                </section >
            }

            <CommentForm
                postId={postId}
                currentComments={currentComments}
                setCurrentComments={setCurrentComments}
            />
        </>
    );
}

export default CommentSection;