import { WANT_TO_READ, CURRENTLY_READING, READ } from '../constants/bookStatus';
import { WANT_TO_READ_SHELVE, CURRENTLY_READING_SHELVE, READ_SHELVE } from '../constants/shelves';

export const getUserBookStatus = (user, bookId) => {
    let bookOnShelve = '';

    for (const [shelveName, shelve] of Object.entries(user.shelves)) {
        for (const book of shelve) {
            if (bookId === book.id) {
                bookOnShelve = shelveName;
                break;
            }
        }
    }

    const bookStatus = getBookShelveStatus(bookOnShelve);
    return bookStatus;
}

const getBookShelveStatus = (bookOnShelve) => {
    switch (bookOnShelve) {
        case WANT_TO_READ_SHELVE:
            return WANT_TO_READ;

        case CURRENTLY_READING_SHELVE:
            return CURRENTLY_READING;

        case READ_SHELVE:
            return READ;

        default:
            return WANT_TO_READ;
    }
} 