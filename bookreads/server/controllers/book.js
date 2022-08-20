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
    bookData.description = bookData.description.split('\n ');

    const newBook = new BookSchema(bookData);

    try {
        await newBook.save();
        res.status(201).json(newBook);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}