import express from 'express';

import { getReviewsById, createReview, likeReview, addCommentOnReview } from '../controllers/review.js';

const router = express.Router();

router.get('/books/:id/reviews', getReviewsById);
router.post('/review/edit/:id', createReview);
router.post('/books/:id', likeReview);
router.post('/books/:id', addCommentOnReview);

export default router;