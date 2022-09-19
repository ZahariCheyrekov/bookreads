import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useBook } from '../../hooks/useBook';

import { AuthContext } from '../../../../contexts/AuthContext';
import { ReviewContextProvider } from '../../contexts/ReviewContext';

import Aside from './Aside';
import Recommended from './Recommended/Recommended';
import Reviews from '../Reviews/Reviews';
import Spinner from '../../../../components/Spinner/Spinner';

import './Details.css';

const Details = () => {
    const book = useBook();
    const { user } = useContext(AuthContext);
    const [isOwner, setIsOwner] = useState(false);
    const [visibleSummary, setVisibleSummary] = useState(false);
    const [hasSummaryButton, setHasSummaryButton] = useState();

    useEffect(() => {
        const isBookOwner = user && (user?.result?._id || user?.result?.googleId) === book?.creatorId;
        setIsOwner(isBookOwner);
    }, [user, book]);

    useEffect(() => {
        setHasSummaryButton(book?.description.join('').length >= 400)
    }, [book]);

    return (
        <main className="main__details">
            {book ?
                <div className="div__wrapper">
                    <Aside isOwner={isOwner} />

                    <section className="section__book--content">
                        <article className="section__article--book">
                            <h1 className="book__title">{book.title}</h1>
                            <h2 className="book__author">{book.author}</h2>

                            <summary className={visibleSummary ? 'book__summary--visible' : 'book__summary'}>
                                {book.description.map((paragraph, index) =>
                                    <p key={index} className="book__summary--paragraph">
                                        {paragraph}
                                    </p>
                                )}
                                {hasSummaryButton &&
                                    <span className={visibleSummary ? 'book__summary--less' : 'book__summary--more'}
                                        onClick={() => setVisibleSummary(prevState => !prevState)}
                                    >
                                        {visibleSummary ? 'Show less' : 'Show more'}
                                        &nbsp;
                                        <i className={`fa-solid fa-angle-down ${visibleSummary ? 'up-arrow' : 'down-arrow'}`}></i>
                                    </span>
                                }
                            </summary>

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

                        {user &&
                            <ReviewContextProvider>
                                <Reviews />
                            </ReviewContextProvider>
                        }
                    </section>
                </div >
                : <Spinner />
            }
        </main >
    );
}

export default Details;