import { useEffect, useState } from 'react';

import { getUserPostsById } from '../../../services/user';

import Posts from '../../../components/Posts/Posts';
import Spinner from '../../../components/Spinner/Spinner';

import './Updates.css';

const Updates = ({ userId, currentUser }) => {
    const [userPosts, setUserPosts] = useState(null);

    useEffect(() => {
        const getUserPosts = async () => {
            const posts = await getUserPostsById(currentUser.name.split(' ').join('-').toLowerCase(), userId);
            setUserPosts(posts);
        }
        getUserPosts();
    }, [userId, currentUser?.name]);

    return (
        <>
            {currentUser ?
                <section className="profile__updates">
                    <h5 className="profile__updates--title">
                        {currentUser.name.split(' ')[0]}'s recent updates
                    </h5>
                    <hr className="profile__hr" />

                    {userPosts ?
                        userPosts.length > 0 ?
                            <Posts userPosts={userPosts} />
                            :
                            <section className="profile__updates--none">
                                <h3 className="profile__updates__none--title">
                                    No Posts Yet
                                </h3>
                            </section>
                        : <Spinner spinnerSize={'medium'} />
                    }
                </section>
                : <Spinner />
            }
        </>
    );
}

export default Updates;