import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import defaultUserPhoto from '../../../../../assets/default-user-photo.png';
import { getPostLikes } from '../../../../../services/post';

import './PostLikes.css';

const PostLikes = () => {
    const { id } = useParams();
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        const fetchLikes = async () => {
            const likes = await getPostLikes(id);
            setLikes(likes);
        }
        fetchLikes();
    }, [id]);

    return (
        <main className="main">
            <section className="likes__section">
                <ul className="likes__list">
                    {likes.map((like, index) =>
                        <li
                            key={index}
                            className="likes__like"
                        >
                            <article className="like__user--photo">
                                <img src={like?.imageUrl
                                    ? like?.imageUrl
                                    : defaultUserPhoto
                                }
                                    alt={like.userName}
                                />
                            </article>
                            <h5 className="like__user--name">
                                <Link to={`/user/${like.userName.split(' ').join('-').toLowerCase()}/${like.userId}`}>
                                    {like.userName}
                                </Link>
                            </h5>
                        </li>
                    )}
                </ul>
            </section>
        </main>
    );
}

export default PostLikes;