import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { deleteBook } from '../../../../api/bookAPI';
import Rating from '../Rating/Rating';

import './Aside.css';

const Aside = ({ id, isOwner, bookCoverUrl, title }) => {
    const navigate = useNavigate();
    const [visibleBookOptions, setVisibleBookOptions] = useState(false);

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
                        <button
                            className="aside__book--button book__delete--button"
                            onClick={() => setVisibleBookOptions(true)}
                        >
                            Delete book
                        </button>
                    </>
                )}
                <button className="aside__book--button book__button--status">
                    Want to read
                    <i className="fa-solid fa-angle-down actions"
                        onClick={() => setVisibleBookOptions(true)}
                    />
                </button>
                <Rating />

                <section className={`aside__book--options ${visibleBookOptions && 'active'}`}>
                    <h4 className="aside__book__options--title">
                        Choose a shelf for this book:
                    </h4>

                    <article className="aside__options--list">
                        <button className="aside__book__option book__option--want">
                            Want to Read
                        </button>
                        <button className="aside__book__option book__option--reading">
                            Currently Reading
                        </button>
                        <button className="aside__book__option book__option--read">
                            Read
                        </button>

                        <button
                            className="aside__book__option book__option--close"
                            onClick={() => setVisibleBookOptions(false)}
                        >
                            Close
                        </button>
                    </article>
                </section>
            </aside >
        </section >
    );
}

export default Aside;