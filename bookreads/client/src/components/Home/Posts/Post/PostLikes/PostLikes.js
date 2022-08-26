import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    console.log(likes);
    return (
        <>PostLikes</>
    );
}

export default PostLikes;