import { API } from '../lib/axios';


export const getUserById = (userId) => API.get(`/user/${userId}`);

export const getPostsByUserId = (name, userId) => API.get(`/user/${name}/${userId}`);

export const uploadUserImage = (userId, imageUrl) => API.post(`/user/${userId}/image`, { imageUrl });