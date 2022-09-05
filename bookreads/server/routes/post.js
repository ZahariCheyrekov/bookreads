import express from 'express';

import {
    getPosts,
    createPost,
    likePost,
    createComment,
    getComments,
    getPostLikes,
    deleteComment,
    deletePostById
} from '../controllers/post.js';


const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/posts/:id', likePost);
router.get('/post/:id/comments', getComments);
router.post('/post/:id/comment', createComment);
router.get('/post/:id/likes', getPostLikes);
router.delete('/post/:id/comment/:commentId', deleteComment);
router.delete('/post/:id', deletePostById);

export default router;