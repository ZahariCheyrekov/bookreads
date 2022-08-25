import axios from 'axios';

import { BASE_URL } from '../constants/url';
import { getToken, getUser } from '../services/localStorage';

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
    const user = getUser();

    if (user) {
        const userToken = getToken();
        req.headers.authorization = `Bearer ${userToken}`;
    }
    return req;
});

export const getBookById = (id) => API.get(`/books/${id}`);
export const createBook = (bookData) => API.post('/books', bookData);
export const editBook = (bookId, bookData) => API.patch(`/books/${bookId}/edit`, bookData);
export const deleteBook = (bookId) => API.delete(`/books/${bookId}`);

export const getPosts = () => API.get('/');
export const getComments = (postId) => API.get(`/post/${postId}/comments`);
export const createPost = (postData) => API.post('/', postData);
export const likePost = (postId, userId, userName) => API.post(`/posts/${postId}`, { userId, userName });
export const createComment = (postId, commentData) => API.post(`/post/${postId}/comment`, commentData);
export const getUserById = (userId) => API.get(`/user/${userId}`);

export const signin = (userData) => API.post(`/user/signin`, userData);
export const signup = (userData) => API.post(`/user/signup`, userData);