import { API } from '../../../lib/axios';


export const getBookById = (id) => API.get(`/books/${id}`);

export const getBooksByTags = (bookId) => API.get(`/books/${bookId}/recommended`);

export const createBook = (bookData) => API.post('/books', bookData);

export const editBook = (bookId, bookData) => API.patch(`/books/${bookId}/edit`, bookData);

export const deleteBook = (bookId) => API.delete(`/books/${bookId}`);