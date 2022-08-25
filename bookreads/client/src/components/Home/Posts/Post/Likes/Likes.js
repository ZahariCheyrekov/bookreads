import { Link } from 'react-router-dom';
import Like from './Like/Like';

import './Likes.css';

const Likes = ({ likes, likedByUser, postId }) => {
    return (
        <>
            {likes.length > 0 &&
                <section className="post__likes--section">
                    <span className="post__likes">
                        {likes.length === 1
                            &&
                            (likedByUser
                                ? <span>
                                    <strong className="post__user--like">
                                        You
                                    </strong>
                                    &nbsp;liked this
                                </span>
                                : <span >
                                    <Like name={likes[0].userName} userId={likes[0].userId} />
                                    &nbsp;liked this
                                </span>
                            )
                        }
                        {likes.length > 1
                            && (likes.length === 2
                                ? (likedByUser
                                    ? <span>
                                        <strong className="post__user--like">
                                            You
                                        </strong>
                                        &nbsp;and&nbsp;
                                        <Like name={likes[0].userName} userId={likes[0].userId} />
                                        &nbsp;liked this
                                    </span>
                                    : <span>
                                        <Like name={likes[0].userName} userId={likes[0].userId} />
                                        &nbsp;and&nbsp;
                                        <Like name={likes[1].userName} userId={likes[1].userId} />
                                        &nbsp;liked this
                                    </span>
                                )
                                : (likedByUser
                                    ? <span>
                                        <strong className="post__user--like">
                                            You
                                        </strong>
                                        &nbsp;and&nbsp;
                                        <Link to={`/post/${postId}/likes`}>
                                            <strong className="post__user--like">
                                                {likes.length - 1} other people
                                            </strong>
                                        </Link>
                                        &nbsp;liked this
                                    </span>
                                    : <span>
                                        <Like name={likes[0].userName} userId={likes[0].userId} />
                                        &nbsp;and&nbsp;
                                        <Link to={`/post/${postId}/likes`}>
                                            <strong className="post__user--like">
                                                {likes.length - 1} other people
                                            </strong>
                                        </Link>
                                        &nbsp;liked this
                                    </span>
                                )
                            )
                        }
                    </span>
                </section>
            }
        </>
    );
}

export default Likes;