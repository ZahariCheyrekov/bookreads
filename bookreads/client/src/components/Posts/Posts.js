import { useEffect, useState } from 'react';

import { getPosts } from '../../services/post';
import Post from './Post/Post';

import './Posts.css';

const Posts = ({ userPosts }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (userPosts) {
            setPosts(userPosts);
        } else {
            const fetchPosts = async () => {
                const posts = await getPosts();
                setPosts(posts);
            }
            fetchPosts();
        }
    }, [userPosts]);

    return (
        <section className="posts">
            {posts?.length > 0 ?
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