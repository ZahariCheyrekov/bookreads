import { ALL_FIELDS_ARE_REQUIRED } from '../../../constants/errors';
import { notify } from '../../../lib/toastify';
import { validateInputFields } from '../../../validation/validateInputFields';
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

export const getBooksByTitle = async (bookTitle) => {
    try {
        const { data } = await bookAPI.getBooksByGivenTitle(bookTitle);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createNewBook = async (bookData) => {
    try {
        const isValidInput = validateInputFields(bookData);

        if (!isValidInput) {
            throw new Error(ALL_FIELDS_ARE_REQUIRED);
        }

        const { data } = await bookAPI.createBook(bookData);
        return data;

    } catch (error) {
        console.log(error);

        if (error.response) {
            notify(error.response.data.message);
        } else {
            notify(error.message);
        }
    }
}