import * as genreAPI from '../../../api/genreAPI';

export const getDefaultBooks = async () => {
    try {
        const { data } = await genreAPI.getDefaultBooksGenres();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getBooksByGivenGenre = async (genre, bookCount) => {
    try {
        const { data } = await genreAPI.getBooksByGenre(genre, bookCount);
        return data;
    } catch (error) {
        console.log(error);
    }
}