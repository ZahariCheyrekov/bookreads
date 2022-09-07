import express from 'express';

import {
    getDefaultBooks,
    getBooksByGenre
} from '../controllers/genre.js';

const router = express.Router();

router.get('/', getDefaultBooks);
router.get('/:genre', getBooksByGenre);

export default router;