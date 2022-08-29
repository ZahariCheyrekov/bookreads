import * as reviewAPI from '../api/reviewAPI';

export const getReviews = async (id) => {
    try {
        const { data } = await reviewAPI.getReviewsById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}