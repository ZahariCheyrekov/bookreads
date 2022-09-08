import * as reviewAPI from '../api/reviewAPI';

export const getRatingByUser = async (bookId, userId) => {
    try {
        const { data } = await reviewAPI.getUserRatingById(bookId, userId);
        return data.rating;
    } catch (error) {
        console.log(error);
    }
}

export const getReviews = async (id) => {
    try {
        const { data } = await reviewAPI.getReviewsById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}