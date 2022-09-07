import BookSchema from '../models/Book.js';

export const getDefaultBooks = async (req, res) => {
    const biographyBooks = await BookSchema.find({ tags: "Biography" }).limit(5);
    const fictionBooks = await BookSchema.find({ tags: "Fiction" }).limit(5);
    const philosophyBooks = await BookSchema.find({ tags: "Philosophy" }).limit(5);

    return res.status(200).json({ biographyBooks, fictionBooks, philosophyBooks });
}

export const getBooksByGenre = async (req, res) => {
    const { genre, bookCount } = req.params;

    const booksGenre = genre.slice(0, 1).toUpperCase() + genre.slice(1).toLowerCase();

    const booksByGenre = await BookSchema.find({ tags: booksGenre });

    return res.status(200).json(booksByGenre);
}