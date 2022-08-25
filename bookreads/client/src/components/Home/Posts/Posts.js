import { useEffect, useState } from 'react';

import { getPosts } from '../../../services/post';
import Post from './Post/Post';

import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts();
            setPosts(posts);
        }
        fetchPosts();
    }, []);

    return (
        <section className="posts">
            {posts.length > 0 ?
                posts.map(post =>
                    <Post
                        key={post._id}
                        post={post}
                    />
                )
                : null}
        </section>
    );
}

export default Posts;