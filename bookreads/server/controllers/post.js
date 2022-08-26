import mongoose from 'mongoose';

import PostSchema from '../models/Post.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostSchema.find();

        res.status(200).json(posts);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostSchema(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    const { userId, userName } = req.body;

    if (!userId) {
        return res.json({ message: 'Unauthenticated' });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const post = await PostSchema.findById(id);

    const index = post.likes.findIndex(like => like.userId === userId);

    if (index === -1) {
        post.likes.push({ userId, userName });
    } else {
        post.likes = post.likes.filter(like => like.userId !== userId);
    }

    await PostSchema.findByIdAndUpdate(id, post);

    return res.status(201).json({ userId, userName });
}

export const getComments = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostSchema.findById(id);
        res.status(200).json(post.comments);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createComment = async (req, res) => {
    const { id } = req.params;
    const commentData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const commentBody = commentData.comment.trim().split(/\n+/);
    commentData.comment = commentBody;

    const post = await PostSchema.findById(id);

    post.comments.push(commentData);

    await PostSchema.findByIdAndUpdate(id, post);

    return res.status(201).json(commentData);
}

export const deleteComment = async (req, res) => {
    const { id, commentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const post = await PostSchema.findById(id);

    post.comments = post.comments.filter(comment => comment.commentId !== commentId);

    await PostSchema.findByIdAndUpdate(id, post);

    return res.status(200).json(commentId);
}