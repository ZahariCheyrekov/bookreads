import { API } from '../../../lib/axios';

export const deleteBookFromShelve = (userId, shelveName, bookId) =>
    API.delete(`/user/${userId}/shelves/${shelveName}/${bookId}`);