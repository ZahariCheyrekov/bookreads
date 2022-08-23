import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import defaultUserPhoto from '../../../../assets/default-user-photo.png';
import { getBook } from '../../../../services/book';
import { getUserById } from '../../../../services/user';

import './Post.css';

const Post = ({ post }) => {
    const [user, setUser] = useState(null);
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
            setUser(user);
        }
        fetchUser();
    }, [post?.creatorId])

    return (
        <article className="post">
            <article className="post__user">
                <Link to={`/user/${user?.split(' ').join('').toLowerCase()}/${post?.creatorId}`}>
                    <img src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                        alt={`${user?.result?.name}`}
                    />
                </Link>
            </article>
        </article>
    );
}

export default Post;