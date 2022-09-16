import * as reviewAPI from '../api/reviewAPI';

import { notifyError } from '../../../lib/toastify';

export const getUserReview = async (bookId, userId) => {
    try {
        const { data } = await reviewAPI.getUserReviewForBook(bookId, userId);
        return data;
    } catch (error) {
        console.log(error);

        if (error.response) {
            notifyError(error.response.data.message);
        } else {
            notifyError(error.message);
        }
    }
}

export const getReviews = async (id) => {
    try {
        const { data } = await reviewAPI.getReviewsById(id);
        return data;
    } catch (error) {
        console.log(error);

        if (error.response) {
            notifyError(error.response.data.message);
        } else {
            notifyError(error.message);
        }
    }
}