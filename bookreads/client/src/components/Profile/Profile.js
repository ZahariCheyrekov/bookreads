import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import FileBase64 from 'react-file-base64';

import { AuthContext } from '../../contexts/AuthContext';
import defaultUserPhoto from '../../assets/default-user-photo.png';
import { getUserById } from '../../services/user';
// import { uploadUserImage } from '../../api/userAPI';

import './Profile.css';

const Profile = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
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
            <section className="main__profile--section">
                <article className="profile__section--article">
                    <img src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                        alt={`${currentUser}`}
                    />
                </article>
                <h4 className="profile__section--user">
                    {currentUser}
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
        </main>
    );
}

export default Profile;