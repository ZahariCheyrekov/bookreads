import './Book.css';

const Book = ({ book, shelve }) => {
    console.log(shelve)
    return (
        <tr className="shelves__row--book">
            <td className="shelves__td">
                <img
                    className="shelves__cover--img"
                    src={book.cover}
                    alt={book.title}
                />
            </td>
            <td className="shelves__td">
                <h4>
                    {book.title}
                </h4>
            </td>
            <td className="shelves__td">
                <h4>
                    {book.author}
                </h4>
            </td>
            <td className="shelves__td">
                <h4>
                    {shelve}
                </h4>
            </td>
        </tr>
    );
}

export default Book;