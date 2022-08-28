const Review = ({ review }) => {
    console.log(review);

    return (
        <li
            className="review__item"
        >
            <aside className="review__aside">
                <img
                    className="review__user--img"
                    src={review.user.imageUrl}
                    alt={review.user.name}
                />
                <h4 className="review__user--name">
                    {review.user.name}
                </h4>
            </aside>
        </li>
    );
}

export default Review;