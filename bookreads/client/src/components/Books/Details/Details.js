import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import { getCard } from '../../../services/book';

import Summary from './Summary/Summary';
import Table from './Table/Table';
import Reviews from '../Reviews/Reviews';

import './Details.css';
import Aside from './Aside/Aside';

const Details = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const isOwner = user?._id || user?.result?.googleId === book?.creatorId;

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
                <div className="div__wrapper">
                    <Aside
                        id={id}
                        isOwner={isOwner}
                        bookCoverUrl={book.bookCoverUrl}
                        title={book.title}
                    />

                    <section className="section__book--content">
                        <article className="section__article--book">
                            <h1 className="book__title">{book.title}</h1>
                            <h2 className="book__author">{book.author}</h2>

                            <Summary description={book?.description} />

                            <ul className="book__tags">
                                {book.tags.map((tag, index) =>
                                    <li key={index} className="book__tag">
                                        <Link to={`/genres/${tag.toLowerCase().split(' ').join('-')}`}>
                                            {tag}
                                        </Link>
                                    </li>
                                )}
                            </ul>

                            <Table book={book} />
                        </article>

                        <hr className="hr__divider" />
                        <Reviews />
                    </section>
                </div >
                : null
            }
        </main >
    );
}

export default Details;