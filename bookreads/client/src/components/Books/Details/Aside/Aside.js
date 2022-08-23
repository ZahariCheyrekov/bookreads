import { Link, useNavigate } from 'react-router-dom';

import { deleteBook } from '../../../../api/requester';
import Rating from '../Rating/Rating';

import './Aside.css';

const Aside = ({ id, isOwner, bookCoverUrl, title }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteBook(id);
        navigate('/');
    }

    return (
        <section className="section__aside">
            <aside className="aside__book--content">
                <article className="aside__book--article">
                    <img src={bookCoverUrl} alt={title} />
                </article>
                {isOwner && (
                    <>
                        <Link to={`/books/${id}/edit`} className="aside__book--link">
                            <button className="aside__book--button">
                                Edit book
                            </button>
                        </Link>
                        <button className="aside__book--button book__delete--button" onClick={handleDelete}>
                            Delete book
                        </button>
                    </>
                )}
                <button className="aside__book--button book__button--status">
                    Want to read
                    <i className="fa-solid fa-angle-down actions"></i>
                </button>
                <Rating />
            </aside>
        </section>
    );
}

export default Aside;