import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

import { getPosts } from '../../services/post';
import Post from './Post/Post';
import Spinner from '../Spinner';

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
                            key={uuid()}
                            post={post}
                            posts={posts}
                            setPosts={setPosts}
                        />
                    )}
                </section>
                : <Spinner />
            }
        </>
    );
}

export default Posts;