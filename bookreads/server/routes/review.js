import express from 'express';

import { createReview } from '../controllers/review.js';

const router = express.Router();

router.post('/review/edit/:id', createReview);

export default router;