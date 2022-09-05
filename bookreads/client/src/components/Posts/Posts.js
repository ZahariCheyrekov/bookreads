import { useEffect, useState } from 'react';

import { getPosts } from '../../services/post';
import Post from './Post/Post';
import Spinner from '../Spinner/Spinner';

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
        <>
            {posts?.length > 0 ?
                <section className="posts">
                    {posts.map(post =>
                        <Post
                            key={post._id}
                            post={post}
                        />
                    )}
                </section>
                : <Spinner />
            }
        </>
    );
}

export default Posts;