import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import uuid from 'react-uuid';

import { getUserById } from '../../../services/user';
import Book from './Book/Book';

import './Shelves.css';

const Shelves = () => {
    const path = useLocation();
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(null);
    const [shelves, setShelves] = useState(null);
    const [booksCount, setBooksCount] = useState();
    const [books, setBooks] = useState([]);
    const [shelve, setShelve] = useState('');

    const index = path.pathname.lastIndexOf('/');
    console.log(path.pathname.slice(index + 1));

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setCurrentUser(user);
            setShelves(user.shelves);

            const count = Object.values(user.shelves).reduce((bookCount, shelve) => bookCount += shelve.length, 0);
            setBooksCount(count);

            const index = path.pathname.lastIndexOf('/');
            const shelveName = path.pathname.slice(index + 1);

            if (shelveName === 'read') {
                setBooks(user.shelves.read);
            } else if (shelveName === 'currently-reading') {
                setBooks(user.shelves.currentlyReading);
            } else if (shelveName === 'to-read') {
                setBooks(user.shelves.toRead);
            }

            setShelve(shelveName);
        }
        fetchUser();
    }, [id, path.pathname]);

    return (
        <main className="main">
            <div className="shelves__wrapper">
                <h3>
                    My Books
                </h3>
                <hr className="profile__hr" />
                <article className="shelves__article">
                    <aside className="shelves">
                        <h4 className="shelves__title">
                            Bookshelves
                        </h4>
                        <ul className="shelves__list">
                            <li className="shelves__list--shelve">
                                <Link to={`/user/${id}/shelves/read`}>
                                    All ({booksCount})
                                </Link>
                            </li>
                            <li className="shelves__list--shelve">
                                <Link to={`/user/${id}/shelves/read`}>
                                    Read ({shelves?.read.length})
                                </Link>
                            </li>
                            <li className="shelves__list--shelve">
                                <Link to={`/user/${id}/shelves/currently-reading`}>
                                    Currently Reading ({shelves?.currentlyReading.length})
                                </Link>
                            </li>
                            <li className="shelves__list--shelve">
                                <Link to={`/user/${id}/shelves/to-read`}>
                                    Want to Read ({shelves?.toRead.length})
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <section className="shelves__books">
                        <table className="shelves__table">
                            <thead className="shelves__thead">
                                <tr className="shelves__row">
                                    <th className="shelves__th shelves__table__padding--none">
                                        cover
                                    </th>
                                    <th className="shelves__th">
                                        title
                                    </th>
                                    <th className="shelves__th">
                                        author
                                    </th>
                                    <th className="shelves__th">
                                        shelve
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="shelves__tbody">
                                {books.length > 0 &&
                                    books.map(book =>
                                        <Book
                                            key={uuid()}
                                            book={book}
                                            shelve={shelve}
                                        />
                                    )
                                }
                            </tbody>
                        </table>
                        {books.length === 0 &&
                            <h4 className="shelves__no__match">
                                No matching items!
                            </h4>
                        }
                    </section>
                </article>
            </div>
        </main>
    );
}

export default Shelves;