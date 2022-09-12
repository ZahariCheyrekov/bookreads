import mongoose from 'mongoose';

import BookSchema from '../models/Book.js';

export const getBookById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find book with id: ${id}`);
    }

    const book = await BookSchema.findById(id);

    return res.status(200).json(book);
}

export const getBooksByTags = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Unable to find book with id: ${id}`);
    }

    const book = await BookSchema.findById(id);
    let books = await BookSchema.find({ tags: { $in: book.tags } });

    books = books.filter(book => String(book._id) !== id);

    return res.status(200).json(books.slice(0, 16));
}

export const getBooksByTitle = async (req, res) => {
    const { title } = req.params;

    const booksByTitle = await BookSchema.find({ title: { $regex: `${title}`, $options: 'i' } });

    return res.status(200).json(booksByTitle);
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

    return res.status(200).json(updatedBook);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No book with id: ${id}`);
    }

    await BookSchema.findByIdAndRemove(id);

    res.json({ message: 'Book was deleted successfully.' });
}