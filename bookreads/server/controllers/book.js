import mongoose from 'mongoose';

import BookSchema from '../models/Book.js';

export const createBook = async (req, res) => {
    const bookData = req.body;
    bookData.description = bookData.description.split('\n ');
    
    const newBook = new BookSchema(bookData);

    try {
        await newBook.save();
        res.status(201).json(newBook);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}