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

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No posts with id: ${id}`);
    }

    const post = await PostSchema.findById(id);

    const index = post.likes.findIndex((currentId) => currentId === String(id));

    if (index === -1) {
        post.likes.push(id);
    } else {
        post.likes = post.likes.filter((currentId) => currentId !== String(id));
    }

    const updatedPost = await PostSchema.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost.likes);
}