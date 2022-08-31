import express from 'express';

import {
    getUserById,
    getUsers,
    getUserPostsById,
    signin,
    signup,
    uploadUserImage
} from '../controllers/user.js';

const router = express.Router();

router.get('/:id', getUserById);
router.get('/', getUsers);
router.get('/:name/:id', getUserPostsById);
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id/image', uploadUserImage);

export default router;