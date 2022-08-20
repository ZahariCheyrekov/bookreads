import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../../../api/requester';
import { getCard } from '../../../services/book';
import './BookDetails.css';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    const fetchBook = async () => {
        const book = await getCard(id);
        setBook(book);
    }

    console.log(book);

    useEffect(() => {
        fetchBook();
    }, []);

    return (
        <main className="main__auth">
            <div className="div__wrapper">
                <aside className="aside__book--content">
                    <article className="aside__book--article">
                        <img src={book.bookCoverUrl} alt={book.title} />
                    </article>
                </aside>
                <section>

                </section>
            </div>
        </main>
    );
}

export default BookDetails;