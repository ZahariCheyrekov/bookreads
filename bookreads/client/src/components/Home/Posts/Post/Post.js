import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import User from './User/User';
import Likes from './Likes/Likes';
import CommentSection from './CommentSection/CommentSection';

import { likePost } from '../../../../services/post';
import { getUserLink } from '../../../../utils/getUserLink';

import { AuthContext } from '../../../../contexts/AuthContext';

import './Post.css';

const Post = ({ post }) => {
    const { user } = useContext(AuthContext);
    const [postUser] = useState(post.userData);
    const [book] = useState(post.postBookData);
    const [likes, setLikes] = useState(post.likes);
    const likedByUser = likes.find(like => like.userId === user?.result?._id);

    const handleLike = async () => {
        const userId = user?.result?._id;
        const userName = user?.result?.name;
        const existingLike = likes.find(like => like.userId === userId);

        if (existingLike) {
            const filteredLikes = likes.filter(like => like.userId !== userId);
            setLikes(filteredLikes);
        } else {
            setLikes([...likes, { userId, userName }]);
        }

        await likePost(post?._id, userId, userName);
    }

    return (
        <article className="post">
            {postUser ?
                <> < User user={postUser} creatorId={post?.creatorId} abs={true} />
                    <div className="post__wrapper">
                        <section className="post__information">
                            {postUser.name ?
                                <Link to={getUserLink(postUser.name, post.creatorId)}>
                                    <h4 className="post__user--name">
                                        {postUser.name}
                                    </h4>
                                </Link>
                                : null}
                            <span className="post__status">
                                {post.status}
                            </span>
                            {book ?
                                <Link to={`/books/${book.bookId}`}>
                                    <h4 className="post__book--title">
                                        {book.bookTitle}
                                    </h4>
                                </Link>
                                : null
                            }
                            <time className="post__time">
                            </time>
                        </section>

                        {book ?
                            <section className="post__book">
                                <article className="post__book--img">
                                    <img className="post__img" src={book.bookCoverUrl} alt={book.bookTitle} />
                                </article>
                                <summary className="post__book--summary">
                                    <Link to={`/books/${book.bookId}`}>
                                        <h4 className="post__summary--title">
                                            {book.bookTitle}
                                        </h4>
                                    </Link>
                                    <h4 className="post__book--author">by {book.bookAuthor}</h4>
                                    <p className="post__book--description">
                                        {book.bookDescription}
                                    </p>
                                    <span className="post__summary--more">
                                        <Link to={`/books/${book.bookId}`}>
                                            Continue reading
                                        </Link>
                                    </span>
                                </summary>
                            </section>
                            : null
                        }
                        <section className="post__buttons">
                            <button className="post__button post__button--like" onClick={handleLike}>
                                {likedByUser ? 'Unlike' : 'Like'}
                            </button>
                            <span> · </span>
                            <button className="post__button post__button--comment">
                                Comment
                            </button>
                        </section>
                    </div>

                    <Likes likes={likes} likedByUser={likedByUser} postId={post._id} />
                    <CommentSection postId={post?._id} postCreatorId={post.creatorId} comments={post.comments} />
                </>
                : null
            }
        </article >

    );
}

export default Post;