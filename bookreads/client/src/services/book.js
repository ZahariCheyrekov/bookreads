import * as bookAPI from '../api/bookAPI';

export const getBook = async (id) => {
    try {
        const { data } = await bookAPI.getBookById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getBooks = async (id) => {
    try {
        const { data } = await bookAPI.getBooksByTags(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}