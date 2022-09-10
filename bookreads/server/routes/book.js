import express from 'express';

import {
    getBookById,
    getBooksByTags,
    getBooksByTitle,
    createBook,
    editBook,
    deleteBook
} from '../controllers/book.js';


const router = express.Router();

router.get('/:id', getBookById);
router.get('/:id/recommended', getBooksByTags);
router.get('/search/:title', getBooksByTitle);
router.post('/', createBook);
router.patch('/:id/edit', editBook);
router.delete('/:id', deleteBook);

export default router;