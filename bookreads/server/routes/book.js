import express from 'express';

import { getBookById, createBook } from '../controllers/book.js';

const router = express.Router();

router.get('/:id', getBookById);
router.post('/', createBook);

export default router;