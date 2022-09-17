import { API } from '../lib/axios';


export const getUserById = (userId) => API.get(`/user/${userId}`);

export const getPostsByUserId = (name, userId) => API.get(`/user/${name}/${userId}`);

export const uploadUserImage = (userId, imageUrl) => API.patch(`/user/${userId}/image`, { imageUrl });