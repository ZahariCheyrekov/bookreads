import { API } from '../../../lib/axios';

export const uploadUserImage = (userId, imageUrl) => API.post(`/user/${userId}/image`, { imageUrl });

export const deleteBookFromShelve = (userId, shelveName, bookId) =>
    API.delete(`/user/${userId}/shelves/${shelveName}/${bookId}`);