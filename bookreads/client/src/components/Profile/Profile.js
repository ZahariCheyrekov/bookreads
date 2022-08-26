import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import defaultUserPhoto from '../../assets/default-user-photo.png';
import { getUserById } from '../../services/user';

import './Profile.css';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setUser(user);
        }
        fetchUser();
    }, [id]);

    const upload = () => {
        const url = '';
        const formData = new FormData();
        formData.append('image', image);
        axios.post(url, formData).then(res => {
            console.log(res);
        });
    }

    return (
        <main className="main__profile">
            <section className="main__profile--section">
                <article className="profile__section--article">
                    <img src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                        alt={`${user}`}
                    />
                </article>
                <h4 className="profile__section--user">
                    {user}
                </h4>
                <Link to={'/user/edit'}>
                    <button className="profile__section--edit">
                        Edit profile
                    </button>
                </Link>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(ev) => setImage(ev.target.files[0])}
                />
                {image &&
                    <>
                        <img src={image?.image?.slice(5)} alt={user} />

                        <button onClick={upload}>
                            Upload
                        </button>
                    </>
                }
            </section>
        </main>
    );
}

export default Profile;