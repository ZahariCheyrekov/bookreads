import mongoose from 'mongoose';

import ReviewSchema from '../models/Review.js';

export const getReviewsById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find book with id: ${id}`);
    }

    const reviews = await ReviewSchema.find({ bookId: String(id) });

    return res.status(200).json(reviews);
}

export const createReview = async (req, res) => {
    const { id } = req.params;
    const reviewData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find book with id: ${id}`);
    }

    reviewData.reviewContent = reviewData.reviewContent.trim().split(/\n+/);

    const review = await ReviewSchema(reviewData);

    try {
        await review.save();
        return res.status(201).json(review);

    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}