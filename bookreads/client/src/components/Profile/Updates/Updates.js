import { useEffect, useState } from 'react';

import { getUserPostsById } from '../../../services/user';
import Posts from '../../Posts/Posts';

import './Updates.css';

const Updates = ({ userId, currentUser }) => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const getUserPosts = async () => {
            const posts = await getUserPostsById(currentUser.name.split(' ').join('-').toLowerCase(), userId);
            setUserPosts(posts);
        }
        getUserPosts();
    }, [userId, currentUser?.name]);

    console.log(userPosts);
    return (
        <>
            {currentUser &&
                <section className="profile__updates">
                    <h5 className="profile__updates--title">
                        {currentUser.name.split(' ')[0]}'s recent updates
                    </h5>
                    <hr className="profile__hr" />

                    {userPosts.length > 0 ?
                        <Posts userPosts={userPosts} />
                        :
                        <section className="profile__updates--none">
                            <h3 className="profile__updates__none--title">
                                No Posts Yet
                            </h3>
                        </section>
                    }
                </section>
            }
        </>
    );
}

export default Updates;