import express from 'express';

import { getReviewsById, createReview } from '../controllers/review.js';

const router = express.Router();

router.get('/books/:id/reviews', getReviewsById);
router.post('/review/edit/:id', createReview);

export default router;