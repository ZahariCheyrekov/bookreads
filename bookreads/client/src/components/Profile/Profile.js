import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import FileBase64 from 'react-file-base64';

import defaultUserPhoto from '../../assets/default-user-photo.png';

import { getUserById } from '../../services/user';
// import { uploadUserImage } from '../../api/userAPI';

import Updates from './Updates/Updates';

import './Profile.css';

const Profile = () => {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(null);
    // const [image, setImage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setCurrentUser(user);
        }
        fetchUser();
    }, [id]);

    // const uploadImage = () => {
    //     const imageUrl = image.base64;
    //     uploadUserImage(user?.result?._id, imageUrl);
    // }

    return (
        <main className="main__profile">
            {currentUser &&
                <>
                    <section className="main__profile--section">
                        <article className="profile__section--article">
                            <img src={currentUser.imageUrl ? currentUser?.imageUrl : defaultUserPhoto}
                                alt={`${currentUser?.name}`}
                            />
                        </article>
                        <h4 className="profile__section--user">
                            {currentUser?.name}
                        </h4>
                        {/* <Link to={'/user/edit'}>
                    <button className="profile__section--edit">
                        Edit profile
                    </button>
                </Link> */}
                        {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={(base64) => (setImage(base64))} />
                {image &&
                    <>
                        <img src={image.base64} alt={currentUser} />
                        <button onClick={uploadImage}>
                            Upload
                        </button>
                    </>
                } */}
                    </section>
                    <section className="profile__user--bookshelves">
                        <h5 className="profile__bookshelves--title">
                            {currentUser.name.split(' ')[0]}'s bookshelves
                        </h5>
                        <hr className="profile__hr" />
                        <ul className="profile__bookshelves">
                            <li className="profile__bookshelve">
                                <Link to={`/user/${id}/shelves/read`}>
                                    read
                                </Link>
                            </li>
                            <li className="profile__bookshelve">
                                <Link to={`/user/${id}/shelves/currently-reading`}>
                                    currently-reading
                                </Link>
                            </li>
                            <li className="profile__bookshelve">
                                <Link to={`/user/${id}/shelves/to-read`}>
                                    to-read
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <Updates
                        userId={id}
                        currentUser={currentUser}
                    />
                </>
            }
        </main >
    );
}

export default Profile;