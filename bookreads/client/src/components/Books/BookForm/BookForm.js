import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { editBook } from '../../../api/bookAPI';
import { createPost } from '../../../api/postAPI';

import { AuthContext } from '../../../contexts/AuthContext';
import { createNewBook, getBook } from '../../../services/book';
import { CREATED_A_BOOK, EDITED_A_BOOK } from '../../../constants/actionType';

import FormField from './FormField/FormField';

import './BookForm.css';

const BookForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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

    useEffect(() => {
        if (id) {
            const fetchBook = async () => {
                const book = await getBook(id);
                setBookData(book);
            }
            fetchBook();
        }
    }, [id]);

    const handleChange = (ev) => {
        setBookData({ ...bookData, [ev.target.name]: ev.target.value });
    }

    const handleClick = async (ev) => {
        ev.preventDefault();
        const creatorId = user?.result?.googleId || user?.result?._id;
        const postBookData = {
            bookId: id,
            bookAuthor: bookData.author,
            bookTitle: bookData.title,
            bookDescription: bookData.description,
            bookCoverUrl: bookData.bookCoverUrl
        }

        const userData = {
            name: user.result.name,
            id: user.result._id,
            imageUrl: user.result.imageUrl
        }

        if (id) {
            editBook(id, bookData);
            createPost({ status: EDITED_A_BOOK, postBookData, userData, createdAt: new Date() });
            navigate(`/books/${id}`);
        } else {
            const createdBook = await createNewBook({ ...bookData, creatorId });
            postBookData.bookId = createdBook._id;
            createPost({ status: CREATED_A_BOOK, postBookData, userData, createdAt: new Date() });
        }
    }

    return (
        <main className="main">
            <form className="main__form--book">
                <legend className="form__legend">{id ? 'Edit' : 'Create'} book</legend>

                <FormField htmlFor={'title'} content={'Title'} value={id && bookData?.title} onChange={handleChange} />
                <FormField htmlFor={'author'} content={'Author'} value={id && bookData?.author} onChange={handleChange} />
                <FormField htmlFor={'description'} content={'Description'} textearea={true} value={id && bookData?.description} onChange={handleChange} />
                <FormField htmlFor={'tags'} content={'Tags'} value={id && bookData?.tags} onChange={handleChange} />
                <FormField htmlFor={'pages'} content={'Pages'} type={'number'} value={id && bookData?.pages} onChange={handleChange} />
                <FormField htmlFor={'language'} content={'Language'} value={id && bookData?.language} onChange={handleChange} />
                <FormField htmlFor={'bookCoverUrl'} content={'Book cover url'} type={'url'} value={id && bookData?.bookCoverUrl} onChange={handleChange} />
                <FormField htmlFor={'datePublished'} content={'Date published'} type={'date'} value={bookData?.datePublished.slice(0, 10)} onChange={handleChange} />

                <button className="form__button auth__button" onClick={handleClick}>
                    {id ? 'Edit' : 'Create'} book
                </button>
            </form>
        </main >
    );
}

export default BookForm;