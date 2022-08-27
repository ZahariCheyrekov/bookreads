import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBooks } from '../../../../services/book';

import './Recommended.css';

const Recommended = ({ tags }) => {
    const { id } = useParams();
    const [recommendedBooks, setRecommendedBooks] = useState([]);

    useEffect(() => {
        const fetchRecommendedBooks = async () => {
            const books = await getBooks(id);
            setRecommendedBooks(books);
        }
        fetchRecommendedBooks();
    }, [id, tags]);

    return (
        <section className="recommended">
            <h3 className="recommended__title">Recommended books</h3>
            <ul className="recommended__books">

            </ul>

            <hr className="hr__divider" />
        </section>
    );
}

export default Recommended;