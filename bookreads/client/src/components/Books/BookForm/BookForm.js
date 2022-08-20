import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../../api/requester";
import { AuthContext } from "../../../contexts/AuthContext";

import './BookForm.css';

const BookForm = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [bookData, setBookData] = useState(
        {
            title: '',
            author: '',
            description: '',
            tags: '',
            pages: '',
            language: '',
            bookCoverUrl: '',
            datePublished: ''
        }
    );

    const handleChange = (ev) => {
        setBookData({ ...bookData, [ev.target.name]: ev.target.value });
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        createBook({ ...bookData, creatorToken: user?.token });
    }

    return (
        <main className="main__auth">
            <form className="main__form--book">
                <legend className="form__legend">Create book</legend>

                <label htmlFor="title" className="form__label">Title</label>
                <input type="text" name="title" className="form__input" onChange={handleChange} />

                <label htmlFor="author" className="form__label">Author</label>
                <input type="text" name="author" className="form__input" onChange={handleChange} />

                <label htmlFor="description" className="form__label">Description</label>
                <textarea name="description" className="form__input form__textarea" onChange={handleChange} />

                <label htmlFor="tags" className="form__label">Tags</label>
                <input type="text" name="tags" className="form__input" onChange={handleChange} />

                <label htmlFor="pages" className="form__label">Pages</label>
                <input type="number" name="pages" className="form__input" onChange={handleChange} />

                <label htmlFor="language" className="form__label">Language</label>
                <input type="text" name="language" className="form__input" onChange={handleChange} />

                <label htmlFor="bookCoverUrl" className="form__label">Book cover url</label>
                <input type="text" name="bookCoverUrl" className="form__input" onChange={handleChange} />

                <label htmlFor="datePublished" className="form__label">Date published</label>
                <input type="date" name="datePublished" className="form__input" onChange={handleChange} />

                <button className="form__button auth__button" onClick={handleClick}>Create book</button>
            </form>
        </main >
    );
}

export default BookForm;