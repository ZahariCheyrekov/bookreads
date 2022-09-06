import { Link, useParams } from 'react-router-dom';

import './Book.css';

const Book = ({ book, shelve }) => {
    const { id } = useParams();

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
        </tr>
    );
}

export default Book;