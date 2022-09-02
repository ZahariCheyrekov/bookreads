import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User.js';
import PostSchema from '../models/Post.js';

import { SALT, TOKEN_EXPIRATION_TIME } from '../constants/index.js';

export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const { name, _id, imageUrl } = await User.findById(id);
        res.status(200).json({ name, _id, imageUrl });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUserPostsById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find user with id: ${id}`);
    }

    const posts = await PostSchema.find({ "userData.id": id });

    return res.status(200).json(posts);
}

export const addBookToUserShelve = async (req, res) => {
    const { id } = req.params;
    const { shelveName, book } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find user with id: ${id}`);
    }

    const user = await User.findById(id);

    const existingBookOnSameShelve = user.shelves[shelveName].some(currentBook => currentBook.id === book.id);

    if (existingBookOnSameShelve) {
        const index = user.shelves[shelveName].findIndex(currentBook => currentBook.id === book.id);
        user.shelves.shelveName.splice(index, 1);
    } else {
        Object.keys(user.shelves).forEach((shelve) => {
            user.shelves[shelve] = user.shelves[shelve].filter(currentBook => currentBook.id !== book.id);
        });

        user.shelves.shelveName = user.shelves.shelveName.push(book);
    }

    await User.findByIdAndUpdate(id, user);

    return res.status(200).json({ shelveName, book });
}

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: 'User doesn\'t exist.' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const signup = async (req, res) => {
    const { name, email, password, repeatPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        if (password !== repeatPassword) {
            return res.status(400).json({ message: 'Passwords don\'t match.' });
        }

        const hashedPassword = await bcrypt.hash(password, SALT);

        const result = await User.create({ email, password: hashedPassword, name, imageUrl: '' });

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

        return res.status(200).json({ result, token });

    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const uploadUserImage = async (req, res) => {
    const { id } = req.params;
    const { imageUrl } = req.body;

    const existingUser = await User.findOne({ id });

    if (!existingUser) {
        return res.status(404).json({ message: 'User doesn\'t exist.' });
    }

    existingUser.imageUrl = imageUrl;

    await User.findByIdAndUpdate(id, existingUser);

    return res.status(204);
}