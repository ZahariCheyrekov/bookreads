import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthContext';

import { getBook } from '../../services/book';
import { ReviewContextProvider } from '../../contexts/ReviewContext';

import Aside from './Aside/Aside';
import Summary from './Summary/Summary';
import Recommended from './Recommended/Recommended';
import Reviews from '../Reviews/Reviews';
import Spinner from '../../../../components/Spinner/Spinner';

import './Details.css';

const Details = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [isOwner] = useState(user?.result?._id || user?.result?.googleId === book?.creatorId);

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id);
            setBook(book);
        }
        fetchBook();
    }, [id]);

    return (
        <main className="main__details">
            {book ?
                <div className="div__wrapper">
                    <Aside
                        book={book}
                        isOwner={isOwner}
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
                            <table className="book__table">
                                <tbody className="book__table--tbody">
                                    <tr className="book__table--row">
                                        <th className="book__table--heading">This edition</th>
                                    </tr>
                                    <tr className="book__table--row">
                                        <td className="book__table--data">
                                            Pages
                                        </td>
                                        <td className="book__table--data">
                                            {book.pages}
                                        </td>
                                    </tr>
                                    <tr className="book__table--row">
                                        <td className="book__table--data">
                                            Language
                                        </td>
                                        <td className="book__table--data">
                                            {book.language}
                                        </td>
                                    </tr>
                                    <tr className="book__table--row">
                                        <td className="book__table--data">
                                            Published
                                        </td>
                                        <td className="book__table--data">
                                            {new Date(book.datePublished).toDateString()}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>

                        <hr className="hr__divider" />
                        <Recommended />

                        <ReviewContextProvider>
                            <Reviews book={book} />
                        </ReviewContextProvider>
                    </section>
                </div >
                : <Spinner />
            }
        </main >
    );
}

export default Details;