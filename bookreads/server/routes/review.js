import express from 'express';

import {
    getUserReview,
    getReviewsById,
    createReview,
    likeReview,
    addCommentOnReview,
    deleteCommentOnReview,
    deleteReview,
} from '../controllers/review.js';


const router = express.Router();

router.get('/books/:id/reviews', getReviewsById);
router.get('/books/:id/:userId', getUserReview);
router.post('/review/edit/:id', createReview);
router.post('/books/:id', likeReview);
router.post('/books/:id/comment', addCommentOnReview);
router.delete('/books/:id/comment/:commentId', deleteCommentOnReview);
router.delete('/reviews/:id', deleteReview);

export default router;