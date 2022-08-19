import express from 'express';

import { getUsers, signin, signup } from '../controllers/user.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;