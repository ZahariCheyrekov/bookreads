import express from 'express';

import { getBookById, createBook, editBook, deleteBook } from '../controllers/book.js';

const router = express.Router();

router.get('/:id', getBookById);
router.post('/', createBook);
router.patch('/:id/edit', editBook);
router.delete('/:id', deleteBook);

export default router;