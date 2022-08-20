import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCard } from '../../../services/book';

import './BookDetails.css';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getCard(id);
            setBook(book);
        }
        fetchBook();
    }, [id]);

    return (
        <main className="main__auth">
            {book ?
                <div className="div__wrapper" >
                    <aside className="aside__book--content">
                        <article className="aside__book--article">
                            <img src={book.bookCoverUrl} alt={book.title} />
                        </article>
                    </aside>
                    <section className="section__book--content">
                        <h1 className="book__title">{book.title}</h1>
                        <h2 className="book__author">{book.author}</h2>

                        <summary className="book__summary">
                            {book.description.map((paragraph, index) =>
                                <p key={index} className="book__summary--paragraph">
                                    {paragraph}
                                </p>
                            )}
                        </summary>
                    </section>
                </div >
                : null
            }
        </main >
    );
}

export default BookDetails;