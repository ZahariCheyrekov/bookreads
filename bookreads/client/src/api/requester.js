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

export const createBook = (bookData) => API.post(`/books`, bookData);

export const signin = (userData) => API.post(`/user/signin`, userData);
export const signup = (userData) => API.post(`/user/signup`, userData);