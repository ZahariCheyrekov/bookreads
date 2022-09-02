import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import User from './User/User';
import Likes from './Likes/Likes';
import CommentSection from './CommentSection/CommentSection';

import { likePost } from '../../../services/post';
import { getUserLink } from '../../../utils/getUserLink';
import { REVIEWED_A_BOOK } from '../../../constants/actionType';

import { AuthContext } from '../../../contexts/AuthContext';

import './Post.css';

const Post = ({ post }) => {
    const { user } = useContext(AuthContext);
    const [postUser] = useState(post?.userData);
    const [book] = useState(post?.postBookData);
    const [likes, setLikes] = useState(post?.likes);
    const [showReviewText, setShowReviewText] = useState(false);
    const [showFullReview, setShowFullReview] = useState(post?.postBookData?.spoilers === false);
    const [likedByUser] = useState(likes?.find(like => like.userId === user?.result?._id));

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
    console.log(post?.postBookData?.spoilers)
    const handleReviewText = () => {
        setShowReviewText(prevState => !prevState);
    }

    return (
        <article className="post">
            {postUser ? <>
                <User
                    name={postUser.name}
                    image={postUser.imageUrl}
                    id={postUser.id} abs={true}
                />
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

                    {book ? <>
                        <section className="post__book--review">
                            {post.postBookData.rating > 0 ?
                                <article className="post__review--rating">
                                    <span className="post_review--span">
                                        Rating
                                    </span>&nbsp;
                                    {[...Array(5)].map((_, index) =>
                                        <i
                                            key={index}
                                            className={`fa-solid fa-star fa-review str ${index < post.postBookData.rating ? 'rated' : ''}`}
                                        />
                                    )}
                                </article>
                                : null
                            }
                            {post?.status === REVIEWED_A_BOOK ? <>
                                {showFullReview ?
                                    <>
                                        <article className={`post__review--content ${showReviewText && 'more'}`}>
                                            {post?.postBookData?.reviewContent?.map((paragraph, index) =>
                                                <p
                                                    key={index}
                                                    className="post__review--paragraph"
                                                >
                                                    {paragraph}
                                                </p>
                                            )}
                                        </article>
                                        <button
                                            className="post__review--button"
                                            onClick={handleReviewText}
                                        >
                                            {showReviewText ? 'Less' : 'More'}
                                        </button>
                                    </>
                                    :
                                    <article className="post__review--spoilers">
                                        <h4 className="post__review__spoilers--title">
                                            The entire review has been hidden because of spoilers.
                                        </h4>
                                        <button
                                            className="review__spoilers--button"
                                            onClick={() => setShowFullReview(true)}
                                        >
                                            Show full review
                                        </button>
                                    </article>
                                }
                            </>
                                : null
                            }
                        </section>
                        <section className={`post__book ${post.status === REVIEWED_A_BOOK ? 'review' : ''}`}>
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
                    </>
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

                <Likes
                    likes={likes}
                    likedByUser={likedByUser}
                    postId={post._id}
                />

                <CommentSection
                    postId={post?._id}
                    postCreatorId={post.creatorId}
                    comments={post.comments}
                />
            </>
                : null
            }
        </article >

    );
}

export default Post;