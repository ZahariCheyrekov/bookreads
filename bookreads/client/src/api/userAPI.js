import { API } from './api';

export const getUserById = (userId) => API.get(`/user/${userId}`);

export const getPostsByUserId = (name, userId) => API.get(`/user/${name}/${userId}`);

export const uploadUserImage = (userId, imageUrl) => API.patch(`/user/${userId}/image`, { imageUrl });

export const signin = (userData) => API.post(`/user/signin`, userData);

export const signup = (userData) => API.post(`/user/signup`, userData);