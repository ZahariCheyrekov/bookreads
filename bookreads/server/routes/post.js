import express from 'express';

import { getPosts, createPost, likePost } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/posts/:id', likePost)

export default router;