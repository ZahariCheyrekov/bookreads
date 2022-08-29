import * as api from '../api/requester';

export const getReviews = async (id) => {
    try {
        const { data } = await api.getReviewsById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}