import * as api from '../api/requester';

export const getBook = async (id) => {
    try {
        const { data } = await api.getBookById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}