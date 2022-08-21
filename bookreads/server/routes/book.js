import express from 'express';

import { getBookById, createBook, editBook } from '../controllers/book.js';

const router = express.Router();

router.get('/:id', getBookById);
router.post('/', createBook);
router.patch('/:id/edit', editBook);

export default router;