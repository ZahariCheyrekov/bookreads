import { useState } from 'react';
import './Review.css';

const Review = ({ review }) => {
    const [showContent, setShowContent] = useState(false);
    console.log(review);

    const handleShowContent = () => {
        setShowContent(prevState => !prevState);
    }

    return (
        <>
            {review
                ? <li className="review__item">
                    <aside className="review__aside">
                        <img
                            className="review__user--img"
                            src={review.user.imageUrl}
                            alt={review.user.name}
                        />
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
                        <hr className="hr__divider"></hr>
                    </article>
                </li>
                : null
            }
        </>
    );
}

export default Review;