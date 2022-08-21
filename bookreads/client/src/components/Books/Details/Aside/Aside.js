import { Link, useNavigate } from 'react-router-dom';

import { deleteBook } from '../../../../api/requester';

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
                        <Link to={`/books/${id}/edit`}>
                            <button className="aside__book--button">
                                Edit book
                            </button>
                        </Link>
                        <button className="aside__book--button book__delete--button" onClick={handleDelete}>
                            Delete book
                        </button>
                    </>
                )}
            </aside>
        </section>
    );
}

export default Aside;