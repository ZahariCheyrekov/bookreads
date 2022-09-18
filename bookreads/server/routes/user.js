import express from 'express';

import {
    getUserById,
    getUsers,
    getUserPostsById,
    addBookToUserShelve,
    signin,
    signup,
    uploadUserImage,
    removeBookFromShelve
} from '../controllers/user.js';


const router = express.Router();

router.get('/:id', getUserById);
router.get('/', getUsers);
router.get('/:name/:id', getUserPostsById);
router.post('/:id/shelves', addBookToUserShelve);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/:id/image', uploadUserImage);
router.delete('/:id/shelves/:shelveName/:bookId', removeBookFromShelve);

export default router;