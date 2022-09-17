import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../../../../contexts/AuthContext';

import { deleteBookFromShelve } from '../../../api/profileAPI';

import './Book.css';

const Book = ({ book, shelve, bookShelve, books, setBooks, setBooksCount, shelves }) => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const removeBookFromShelve = async () => {
        const filteredBooks = books.filter(currentBook => currentBook.id !== book.id);
        setBooks(filteredBooks);

        const filteredBookShelve = shelves[bookShelve].filter(currentBook => currentBook.id !== book.id);
        shelves[bookShelve] = filteredBookShelve;

        setBooksCount(prevState => prevState - 1);

        await deleteBookFromShelve(id, shelve, book.id);
    }

    return (
        <tr className="shelves__row--book">
            <td className="shelves__td shelves__table__padding--none">
                <Link to={`/books/${book.id}`}>
                    <img
                        className="shelves__cover--img"
                        src={book.cover}
                        alt={book.title}
                    />
                </Link>
            </td>
            <td className="shelves__td">
                <Link to={`/books/${book.id}`}>
                    <h4 className="shelves__td--title">
                        {book.title}
                    </h4>
                </Link>
            </td>
            <td className="shelves__td">
                <Link to={`/author/show`}>
                    <h4 className="shelves__td--title">
                        {book.author}
                    </h4>
                </Link>
            </td>
            <td className="shelves__td">
                <Link to={`/user/${id}/shelves/${shelve}`}>
                    <h4 className="shelves__td--title">
                        {shelve}
                    </h4>
                </Link>
            </td>
            {user?.result._id === id ?
                shelve !== 'shelves' &&
                <td className="shelves__td">
                    <button
                        className="shelves__td--delete"
                        onClick={removeBookFromShelve}
                    >
                        Delete
                    </button>
                </td>
                : null
            }
        </tr>
    );
}

export default Book;