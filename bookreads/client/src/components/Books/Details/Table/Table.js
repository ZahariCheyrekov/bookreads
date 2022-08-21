import './Table.css';

const Table = ({ book }) => {
    return (
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
    );
}

export default Table;