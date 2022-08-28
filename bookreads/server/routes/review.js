import express from 'express';

import { getReviewsById, createReview, likeReview } from '../controllers/review.js';

const router = express.Router();

router.get('/books/:id/reviews', getReviewsById);
router.post('/review/edit/:id', createReview);
router.post('/books/:id', likeReview);

export default router;