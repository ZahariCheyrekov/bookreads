import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import User from './User/User';
import { AuthContext } from '../../../../contexts/AuthContext';
import { getBook } from '../../../../services/book';
import { getUserById } from '../../../../services/user';

import './Post.css';

const Post = ({ post }) => {
    const { user } = useContext(AuthContext);
    const [postUser, setPostUser] = useState(null);
    const [book, setBook] = useState(null);

    useEffect(() => {
        if (post?.bookId) {
            const fetchBook = async () => {
                const book = await getBook(post.bookId);
                setBook(book);
            }
            fetchBook();
        }
    }, [post?.bookId]);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(post?.creatorId);
            setPostUser(user);
        }
        fetchUser();
    }, [post?.creatorId])
    console.log(book)
    return (
        <article className="post">
            <User user={postUser} creatorId={post?.creatorId} abs={true} />
            <section className="post__information">
                <Link to={`/user/${postUser?.split(' ').join('').toLowerCase()}/${post.creatorId}`}>
                    <h4 className="post__user--name">
                        {postUser}
                    </h4>
                </Link>
                <span className="post__status">
                    {post.status}
                </span>
                {book ?
                    <Link to={`/books/${book._id}`}>
                        <h4 className="post__book--title">
                            {book.title}
                        </h4>
                    </Link>
                    : null
                }
                <time className="post__time">
                </time>
            </section>

            {book ?
                <section className="post__book">
                    <article className="post__book--img">
                        <img src={book.bookCoverUrl} alt={book.title} />
                    </article>
                    <summary className="post__book--summary">
                        <Link to={`/books/${book._id}`}>
                            <h4 className="post__summary--title">
                                {book.title}
                            </h4>
                        </Link>
                        <span className="post__book--author">
                            by
                            <h5 className="book__author--name">{book.author}</h5>
                        </span>
                        <p className="post__book--description">
                            {book.description}
                        </p>
                    </summary>
                </section>
                : null
            }
        </article>
    );
}

export default Post;