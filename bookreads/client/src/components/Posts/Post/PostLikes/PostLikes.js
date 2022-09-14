import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/AuthContext';

import defaultUserPhoto from '../../../../assets/default-user-photo.png';
import { getPostLikes } from '../../../../services/post';
import { getUserLink } from '../../../../utils/getUserLink';

import Spinner from '../../../Spinner/Spinner';

import './PostLikes.css';

const PostLikes = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [likes, setLikes] = useState(null);

    useEffect(() => {
        const fetchLikes = async () => {
            const likes = await getPostLikes(id);
            setLikes(likes);
        }
        fetchLikes();
    }, [id]);

    return (
        <>
            {likes ?
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
                                        <Link to={getUserLink(like.userName, like.userId)}>
                                            {(like.userId === user.result._id) ? 'You' : like.userName}
                                        </Link>
                                    </h5>
                                </li>
                            )}
                        </ul>
                    </section>
                </main>
                : <Spinner />
            }
        </>
    );
}

export default PostLikes;