import * as bookAPI from '../api/bookAPI';

import { ALL_FIELDS_ARE_REQUIRED } from '../../../constants/errors';
import { NEGATIVE_PAGES_ERROR } from '../constants/bookConstants';

import { notify } from '../../../lib/toastify';
import { validateInputFields } from '../../../validation/validateInputFields';

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

        if (bookData.pages <= 0) {
            throw new Error(NEGATIVE_PAGES_ERROR);
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