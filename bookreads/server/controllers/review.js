import mongoose from 'mongoose';

export const createReview = (req, res) => {
    const { id } = req.params;
    const reviewData = req.body;

    console.log(id, reviewData);
}