import mongoose from 'mongoose';

import ReviewSchema from '../models/Review.js';

export const getUserRating = async (req, res) => {
    //TODO: Fix function


    
    // const { id, userId } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).send(`Unable to find review with id: ${id}`);
    // }

    // const review = await ReviewSchema.findOne({ bookId: String(id) });
    // // const review = await ReviewSchema.findOne({ "user.id": String(userId) });
    // let rating = -1;
    // if (review?.rating) {
    //     rating = review.rating;
    // }

    // return res.status(200).json(0);
}

export const getReviewsById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find review with id: ${id}`);
    }

    const reviews = await ReviewSchema.find({ bookId: String(id) });

    return res.status(200).json(reviews);
}

export const createReview = async (req, res) => {
    const { id } = req.params;
    const reviewData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find review with id: ${id}`);
    }

    if (reviewData.reviewContent) {
        reviewData.reviewContent = reviewData.reviewContent.trim().split(/\n+/);
    }

    const review = await ReviewSchema(reviewData);

    try {
        await review.save();
        return res.status(201).json(review);

    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}

export const likeReview = async (req, res) => {
    const { id } = req.params;
    const { like } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find review with id: ${id}`);
    }

    const review = await ReviewSchema.findById(id);

    const index = review.likes.findIndex(currentLike => currentLike === like);

    if (index === -1) {
        review.likes.push(like);
    } else {
        review.likes = review.likes.filter(currentLike => currentLike !== like);
    }

    await ReviewSchema.findByIdAndUpdate(id, review);

    return res.status(200).json({ userLike: like });
}

export const addCommentOnReview = async (req, res) => {
    const { id } = req.params;
    const commentData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find review with id: ${id}`);
    }

    const review = await ReviewSchema.findById(id);

    review.comments.push(commentData);

    await ReviewSchema.findByIdAndUpdate(id, review);

    return res.status(201).json(commentData);
}

export const deleteCommentOnReview = async (req, res) => {
    const { id, commentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find review with id: ${id}`);
    }

    const review = await ReviewSchema.findById(id);

    review.comments = review.comments.filter(comment => comment.commentId !== commentId);

    await ReviewSchema.findByIdAndUpdate(id, review);

    return res.status(200).json(commentId);
}