import './Book.css';

const Book = ({ book }) => {
    return (
        <li className="book">
            <article className="book__article">
                <img
                    src={book.bookCoverUrl}
                    alt={book.title}
                    className="book__article--img"
                />
            </article>
            <h4 className="title__name">
                {book.title}
            </h4>
            <h5 className="book__author--name">
                {book.author}
            </h5>
        </li>
    );
}

export default Book;