import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getUserById } from '../../../services/user';

import './Shelves.css';

const Shelves = () => {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(null);
    const [shelves, setShelves] = useState(null);
    const [booksCount, setBooksCount] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setCurrentUser(user);
            setShelves(user.shelves);

            const count = Object.values(user.shelves).reduce((bookCount, shelve) => bookCount += shelve.length, 0);
            setBooksCount(count);
        }
        fetchUser();
    }, [id]);

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
                                    <th className="shelves__th">
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
                                    <th className="shelves__th">
                                        review
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="shelves__row">
                                    <td className="shelves__td">

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </article>
            </div>
        </main>
    );
}

export default Shelves;