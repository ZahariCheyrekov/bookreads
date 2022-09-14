import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBook } from '../services/book';

export const useBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id);
            setBook(book);
        }
        fetchBook();
    }, [id]);

    return book;
}