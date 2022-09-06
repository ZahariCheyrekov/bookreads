import express from 'express';

import {
    getUserById,
    getUsers,
    getUserPostsById,
    addBookToUserShelve,
    signin,
    signup,
    uploadUserImage,
    followUserById
} from '../controllers/user.js';


const router = express.Router();

router.get('/:id', getUserById);
router.get('/', getUsers);
router.get('/:name/:id', getUserPostsById);
router.post('/:id/shelves', addBookToUserShelve);
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id/image', uploadUserImage);
router.post('/:id', followUserById);

export default router;