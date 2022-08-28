import * as api from '../api/requester';

export const getReviews = async (id) => {
    try {
        const { data } = await api.getReviewsById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createCommentOnReview = async (id, commentData) => {
    try {
        const { data } = await api.createComment(id, commentData);
        return data;
    } catch (error) {
        console.log(error);
    }
}