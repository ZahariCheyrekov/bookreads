import express from 'express';

import { getPosts, createPost, likePost, createComment } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/posts/:id', likePost);
router.post('/post/:id/comment', createComment);

export default router;