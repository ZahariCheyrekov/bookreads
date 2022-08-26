import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm';

import { getComments } from '../../../../../services/post';

import './CommentSection.css';

const CommentSection = ({ postId, postCreatorId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const comments = await getComments(postId);
            setComments(comments);
        }
        fetchComments();
    }, [postId]);

    return (
        <>
            {comments?.length > 0 &&
                < section className="comment__section">
                    <ul className="comment__ul">
                        {comments.map(comment =>
                            <Comment
                                key={uuid()}
                                comment={comment}
                                comments={comments}
                                setComments={setComments}
                                postId={postId}
                                postCreatorId={postCreatorId}
                            />
                        )}
                    </ul>
                </section >
            }

            <CommentForm
                postId={postId}
                comments={comments}
                setComments={setComments}
            />
        </>
    );
}

export default CommentSection;