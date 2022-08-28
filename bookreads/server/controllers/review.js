import mongoose from 'mongoose';

import ReviewSchema from '../models/Review.js';

export const createReview = async (req, res) => {
    const { id } = req.params;
    const reviewData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find book with id: ${id}`);
    }

    const review = await ReviewSchema(reviewData);

    try {
        await review.save();
        res.status(201).json(review);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}