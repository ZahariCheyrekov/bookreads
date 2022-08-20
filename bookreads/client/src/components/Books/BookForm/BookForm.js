import { useState } from "react";

import './BookForm.css';

const BookForm = () => {
    const [bookData, setBookData] = useState({ title: '', author: '', description: '', tags: '', pages: '', datePublished: '' });

    const handleChange = (ev) => {
        setBookData({ ...bookData, [ev.target.name]: ev.target.value });
    }

    const handleClick = (ev) => {
        ev.preventDefault();
    }

    return (
        <main className="main__auth">
            <form className="main__form--book">
                <legend className="form__book--legend">CreateBook</legend>

                <label htmlFor="title" className="form__book--label">Title</label>
                <input type="text" name="title" className="form__book--input" onChange={handleChange} />

                <label htmlFor="author" className="form__book--label">Author</label>
                <input type="text" name="author" className="form__book--input" onChange={handleChange} />

                <label htmlFor="description" className="form__book--label">Description</label>
                <input type="text" name="description" className="form__book--input" onChange={handleChange} />

                <label htmlFor="tags" className="form__book--label">Tags</label>
                <input type="text" name="tags" className="form__book--input" onChange={handleChange} />

                <label htmlFor="pages" className="form__book--label">Pages</label>
                <input type="number" name="pages" className="form__book--input" onChange={handleChange} />

                <label htmlFor="datePusblished" className="form__book--label">Date published</label>
                <input type="date" name="datePusblished" className="form__book--input" onChange={handleChange} />

                <button className="form__book--button" onClick={handleClick}>Create book</button>
            </form>
        </main >
    );
}

export default BookForm;