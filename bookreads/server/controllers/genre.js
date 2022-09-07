import BookSchema from '../models/Book.js';

export const getDefaultBooks = async (req, res) => {
    const biographyBooks = await BookSchema.find({ tags: "Biography" });
    const fictionBooks = await BookSchema.find({ tags: "Fiction" });
    const philosophyBooks = await BookSchema.find({ tags: "Philosophy" });

    return res.status(200).json({ biographyBooks, fictionBooks, philosophyBooks });
}

export const getBooksByGenre = async (req, res) => {
    const { genre, bookCount } = req.params;

    console.log(bookCount)
    const booksGenre = genre.slice(0, 1).toUpperCase() + genre.slice(1).toLowerCase();

    const booksByGenre = await BookSchema.find({ tags: booksGenre });

    return res.status(200).json(booksByGenre);
}