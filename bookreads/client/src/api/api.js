import axios from 'axios';

import { BASE_URL } from '../constants/url';
import { getToken, getUser } from '../services/localStorage';

export const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
    const user = getUser();

    if (user) {
        const userToken = getToken();
        req.headers.authorization = `Bearer ${userToken}`;
    }
    return req;
});