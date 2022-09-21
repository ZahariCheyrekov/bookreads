import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

import { AuthContext } from '../../../contexts/AuthContext';

import { getUserLink } from '../../../utils/getUserLink';
import { uploadUserImage } from '../api/profileAPI';

import Spinner from '../../../components/Spinner/Spinner';
import defaultUserPhoto from '../../../assets/default-user-photo.png';

import './Edit.css';
import { changeUserImage } from '../../../services/localStorage';

const Edit = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [file, setFile] = useState(user?.result.imageUrl);

    const uploadImage = () => {
        const imageUrl = file.base64;

        changeUserImage(imageUrl);
        uploadUserImage(user?.result?._id, imageUrl);
    
        navigate(getUserLink(user.result.name, user.result._id));
    }

    return (
        <main className="main">
            {user ?
                <section className="profile__edit--section" >
                    <h3 className="profile__edit--title">
                        Edit photo
                    </h3>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={(base64) => (setFile(base64))}
                    />
                    <img
                        src={file ? (file?.base64 ? file.base64 : file) : defaultUserPhoto}
                        alt={file.name}
                        className="profile__edit--img"
                    />
                    {file &&
                        <>
                            <button
                                className="profile__edit--button"
                                onClick={uploadImage}
                            >
                                Upload
                            </button>
                        </>
                    }
                </section >
                : <Spinner />
            }
        </main >
    );
}

export default Edit;