import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../../../../contexts/AuthContext';

import { getUserLink } from '../../../../../utils/getUserLink';
import { getReviewDate } from '../../../utils/getReviewDate';
import { likeReview } from '../../../api/reviewAPI';

import Comments from './Comments/Comments';

import './Review.css';

const Review = ({ review, userReview }) => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [reviewRating] = useState(review.rating);
    const [likes, setLikes] = useState(review.likes);
    const [comments, setComments] = useState(review.comments);
    const [hasButton] = useState(review.reviewContent.join(' ').length >= 300);
    const [likedByUser, setLikedByUser] = useState(likes.find(like => like === user?.result?._id));
    const [showContent, setShowContent] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showFullReview, setShowFullReview] = useState(user?.result._id === review.user.id || review.spoilers === false);

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
                ?
                <li className="review__item">
                    <aside className="review__aside">
                        <div className="review__user--wrapper">
                            <Link to={getUserLink(review.user.name, review.user.id)}>
                                <h4 className="review__user--name">
                                    {review.user.name}
                                </h4>
                            </Link>
                        </div>
                    </aside>
                    <article className="review__content">
                        <section className="review__rating">
                            {reviewRating === 0
                                ?
                                <strong>
                                    Read
                                </strong>
                                :
                                <span>
                                    {[...Array(5)].map((_, index) =>
                                        <i
                                            key={index}
                                            className={`fa-solid fa-star fa-review 
                                            ${index < reviewRating ? 'rated' : ''}`
                                            }
                                        />
                                    )}
                                </span>
                            }
                            <time className="review__created--time">
                                {getReviewDate(review.createdAt)}
                            </time>
                        </section>
                        {showFullReview
                            ?
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
                                        onClick={() => setShowContent(prevState => !prevState)}
                                    >
                                        Show {showContent ? 'less' : 'more'}&nbsp;
                                        <i className="fa-solid fa-angle-down down-arrow"></i>
                                    </span>
                                }
                            </section>
                            : <article className="post__review--spoilers">
                                <h4 className="post__review__spoilers--title">
                                    The entire review is hidden because of spoilers.
                                </h4>
                                <button
                                    className="review__spoilers--button"
                                    onClick={() => setShowFullReview(true)}
                                >
                                    Show full review
                                </button>
                            </article>
                        }
                        {(likes.length > 0 || comments.length > 0) &&
                            <section className="review__likes__comments">
                                {likes.length > 0 &&
                                    <article className="review__likes">
                                        <span className="review__likes--number">
                                            {likes.length}&nbsp;
                                        </span>
                                        <span className="review__likes--text">
                                            {likes.length === 1
                                                ? 'like'
                                                : 'likes'
                                            }
                                        </span>
                                    </article>
                                }
                                {(likes.length > 0 && comments.length > 0) &&
                                    <span className="review__likes__comments--dot"> · </span>
                                }
                                {comments.length > 0 &&
                                    <article className="review__comments">
                                        <span className="review__comments--number">
                                            {comments.length}&nbsp;
                                        </span>
                                        <span className="review__comments--text">
                                            {comments.length === 0 || comments.length === 1
                                                ? 'comment'
                                                : 'comments'
                                            }
                                        </span>
                                    </article>
                                }
                            </section>
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
                                onClick={() => setShowComments(prevState => !prevState)}
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
                        {userReview
                            ? <Link to={`/review/edit/${id}`} className="user__review--link">
                                <span className="reviews__user__review--edit">
                                    Edit review
                                </span>
                            </Link>
                            : <hr className="hr__divider"></hr>
                        }
                    </article>
                </li >
                : null
            }
        </>
    );
}

export default Review;