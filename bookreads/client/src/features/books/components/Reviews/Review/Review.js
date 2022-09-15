import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../../../contexts/AuthContext';

import { getUserLink } from '../../../../../utils/getUserLink';
import { likeReview } from '../../../api/reviewAPI';

import defaultUserPhoto from '../../../../../assets/default-user-photo.png';

import Comments from './Comments/Comments';

import './Review.css';

const Review = ({ review, userReview }) => {
    const { user } = useContext(AuthContext);
    const [reviewRating] = useState(review.rating);
    const [likes, setLikes] = useState(review.likes);
    const [comments, setComments] = useState(review.comments);
    const [hasButton] = useState(review.reviewContent.join(' ').length >= 300);
    const [likedByUser, setLikedByUser] = useState(likes.find(like => like === user?.result?._id));
    const [showContent, setShowContent] = useState(false);
    const [showComments, setShowComments] = useState(false);

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

    const handleShowComments = () => {
        setShowComments(prevState => !prevState);
    }

    return (
        <>
            {review
                ?
                <li className="review__item">
                    <aside className="review__aside">
                        <div className="review__user--wrapper">
                            <Link to={getUserLink(review.user.name, review.user.id)}>
                                <article className="review__user--article">
                                    <img
                                        className="review__user--img"
                                        src={review.user.imageUrl ? review.user.imageUrl : defaultUserPhoto}
                                        alt={review.user.name}
                                    />
                                </article>
                            </Link>
                            <h4 className="review__user--name">
                                {review.user.name}
                            </h4>
                        </div>
                    </aside>
                    <article className="review__content">
                        <section className="review__rating">
                            {[...Array(5)].map((_, index) =>
                                <i
                                    key={index}
                                    className={`fa-solid fa-star fa-review ${index < reviewRating ? 'rated' : ''}`}
                                />
                            )}
                        </section>
                        <section className={`review__section--content ${showContent && 'active'}`}>
                            {review.reviewContent.map((paragraph, index) =>
                                <p
                                    key={index}
                                    className="review__paragraph"
                                >
                                    {paragraph}
                                </p>
                            )}
                            {hasButton &&
                                <span
                                    className={`review__span ${showContent ? 'less' : 'more'}`}
                                    onClick={handleShowContent}
                                >
                                    Show {showContent ? 'less' : 'more'}&nbsp;
                                    <i className="fa-solid fa-angle-down down-arrow"></i>
                                </span>
                            }
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
                            <article
                                className="review__button review__button--comment"
                                onClick={handleShowComments}
                            >
                                <i className="fa-regular fa-comments" />
                                &nbsp;
                                <span className="review__button--text">
                                    Comment
                                </span>
                            </article>
                        </section>

                        {showComments &&
                            <Comments
                                review={review}
                                comments={review.comments}
                                setComments={setComments}
                            />
                        }
                        {!userReview &&
                            <hr className="hr__divider"></hr>
                        }
                    </article>
                </li >
                : null
            }
        </>
    );
}

export default Review;