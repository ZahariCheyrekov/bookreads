import * as reviewAPI from '../api/reviewAPI';

export const getUserReview = async (bookId, userId) => {
    try {
        const { data } = await reviewAPI.getUserReviewForBook(bookId, userId);
        return data;
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