import express from 'express';

import { getUserById, getUsers, signin, signup, uploadUserImage } from '../controllers/user.js';

const router = express.Router();

router.get('/:id', getUserById);
router.get('/', getUsers);
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id/image', uploadUserImage);

export default router;