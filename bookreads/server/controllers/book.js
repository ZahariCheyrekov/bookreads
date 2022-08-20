import mongoose from 'mongoose';

import BookSchema from '../models/Book.js';

export const createBook = async (req, res) => {
    const bookData = req.body;
    const newBook = new BookSchema(bookData);

    try {
        await newBook.save();
        res.status(201).json(newBook);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}