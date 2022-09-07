import { API } from '../lib/axios';

export const getDefaultBooksGenres = () => API.get('/genres');

export const getBooksByGenre = (genre, bookCount) => API.get(`/genres/${genre}`, { bookCount });