import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import User from './User/User';
import CommentForm from './CommentForm/CommentForm';

import { getBook } from '../../../../services/book';
import { getUserById } from '../../../../services/user';
import { likePost } from '../../../../services/post';
import { AuthContext } from '../../../../contexts/AuthContext';

import './Post.css';

const Post = ({ post }) => {
    const { user } = useContext(AuthContext);
    const [postUser, setPostUser] = useState(null);
    const [book, setBook] = useState(null);
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        if (post?.bookId) {
            const fetchBook = async () => {
                const book = await getBook(post.bookId);
                setBook(book);
                setLikes(post.likes);
            }
            fetchBook();
        }
    }, [post?.bookId, post?.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(post?.creatorId);
            setPostUser(user);
        }
        fetchUser();
    }, [post?.creatorId])

    const handleLike = async () => {
        const existingLike = likes.find(like => like === user?.result?._id);

        if (!existingLike) {
            const like = await likePost(post?._id, user?.result?._id);
            setLikes([...likes, like]);
        } else {
            const filteredLikes = likes.filter(like => like !== user?.result?._id);
            setLikes(filteredLikes);
            await likePost(post?._id, user?.result?._id);
        }
    }

    return (
        <article className="post">
            <User user={postUser} creatorId={post?.creatorId} abs={true} />
            <div className="post__wrapper">
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
                            <img className="post__img" src={book.bookCoverUrl} alt={book.title} />
                        </article>
                        <summary className="post__book--summary">
                            <Link to={`/books/${book._id}`}>
                                <h4 className="post__summary--title">
                                    {book.title}
                                </h4>
                            </Link>
                            <h4 className="post__book--author">by {book.author}</h4>
                            <p className="post__book--description">
                                {book.description}

                            </p>
                            <span className="post__summary--dots">
                                ...
                                <span className="post__summary--more">
                                    <Link to={`/books/${book._id}`}>
                                        Continue reading
                                    </Link>
                                </span>
                            </span>
                        </summary>
                    </section>
                    : null
                }
                <section className="post__buttons">
                    <button className="post__button post__button--like" onClick={handleLike}>Like</button>
                    <span> · </span>
                    <button className="post__button post__button--comment">Comment</button>
                </section>
            </div>
            <section className="post__likes--section">
                <span className="post__likes">
                    {likes.length}
                </span>
            </section>
            <CommentForm />
        </article>
    );
}

export default Post;