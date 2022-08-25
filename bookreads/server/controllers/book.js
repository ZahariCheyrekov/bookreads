import mongoose from 'mongoose';

import BookSchema from '../models/Book.js';

export const getBookById = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await BookSchema.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBook = async (req, res) => {
    const bookData = req.body;
    const description = bookData.description.trim().split(/\n+/);
    bookData.description = description;

    const tags = bookData.tags.split(/[, ]+/);
    bookData.tags = tags;

    const newBook = new BookSchema(bookData);

    try {
        await newBook.save();
        res.status(201).json(newBook);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const editBook = async (req, res) => {
    const { id: _id } = req.params;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`Unable to find card with id: ${_id}`);
    }

    const updatedBook = await BookSchema.findByIdAndUpdate(_id, book);
    res.json(updatedBook);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No book with id: ${id}`);
    }

    await BookSchema.findByIdAndRemove(id);

    res.json({ message: 'Book was deleted successfully.' });
}