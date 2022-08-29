import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/AuthContext';
import { likeReview } from '../../../../api/requester';

import Comments from './Comments/Comments';

import './Review.css';

const Review = ({ review }) => {
    const { user } = useContext(AuthContext);
    const [likes, setLikes] = useState(review.likes);
    const [comments, setComments] = useState(review.comments);
    const [likedByUser, setLikedByUser] = useState(likes.find(like => like === user?.result?._id));
    const [showContent, setShowContent] = useState(false);

    const handleShowContent = () => {
        setShowContent(prevState => !prevState);
    }

    const handleLike = () => {
        const userId = user?.result?._id;
        likeReview(review._id, userId);

        if (likedByUser) {
            const filteredLikes = likes.filter(like => like !== userId);
            setLikes(filteredLikes);
            setLikedByUser(false);
        } else {
            setLikes([...likes, userId]);
            setLikedByUser(true);
        }
    }

    return (
        <>
            {review
                ? <li className="review__item">
                    <aside className="review__aside">
                        <Link to={`/user/${review.user.name.split(' ').join('-').toLowerCase()}/${review.user.id}`}>
                            <article className="review__user--article">
                                <img
                                    className="review__user--img"
                                    src={review.user.imageUrl}
                                    alt={review.user.name}
                                />
                            </article>
                        </Link>
                        <h4 className="review__user--name">
                            {review.user.name}
                        </h4>
                        <button className="review__button--follow">
                            Follow
                        </button>
                    </aside>
                    <article className="review__content">
                        <section className={`review__section--content ${showContent && 'active'}`}>
                            {review.reviewContent.map((paragraph, index) =>
                                <p
                                    key={index}
                                    className="review__paragraph"
                                >
                                    {paragraph}
                                </p>
                            )}
                            <span
                                className={`review__span ${showContent ? 'less' : 'more'}`}
                                onClick={handleShowContent}
                            >
                                Show {showContent ? 'less' : 'more'}&nbsp;
                                <i className="fa-solid fa-angle-down down-arrow"></i>
                            </span>
                        </section>
                        {(likes.length > 0 || comments.length > 0) ?
                            <section className="review__likes__comments">
                                <article className="review__likes">
                                    <span className="review__likes--number">
                                        {likes.length}&nbsp;
                                    </span>
                                    <span className="review__likes--text">
                                        {likes.length === 1 ? 'like' : 'likes'}
                                    </span>
                                </article>
                                <span className="review__likes__comments--dot"> · </span>
                                <article className="review__comments">
                                    <span className="review__comments--number">
                                        {comments.length}&nbsp;
                                    </span>
                                    <span className="review__comments--text">
                                        {comments.length === 0 || comments.length === 1 ? 'comment' : 'comments'}
                                    </span>
                                </article>
                            </section>
                            : null
                        }
                        <section className="review__section--buttons">
                            <article
                                className={`review__button review__button--like ${likedByUser ? 'active' : ''}`}
                                onClick={handleLike}
                            >
                                <i className="fa-regular fa-thumbs-up" />
                                &nbsp;
                                <span className="review__button--text">
                                    Like
                                </span>
                            </article>
                            <article className="review__button review__button--comment">
                                <i className="fa-regular fa-comments" />
                                &nbsp;
                                <span className="review__button--text">
                                    Comment
                                </span>
                            </article>
                        </section>

                        <Comments
                            review={review}
                            comments={review.comments}
                            setComments={setComments}
                        />
                        <hr className="hr__divider"></hr>
                    </article>
                </li >
                : null
            }
        </>
    );
}

export default Review;