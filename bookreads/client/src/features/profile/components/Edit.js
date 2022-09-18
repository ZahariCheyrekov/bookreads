import { useContext, useState } from 'react';
import FileBase64 from 'react-file-base64';

import { AuthContext } from '../../../contexts/AuthContext';

import { uploadUserImage } from '../api/profileAPI';

import Spinner from '../../../components/Spinner/Spinner';
import defaultUserPhoto from '../../../assets/default-user-photo.png';

import './Edit.css';

const Edit = () => {
    const { user } = useContext(AuthContext);
    const [file, setFile] = useState('');

    const uploadImage = () => {
        const imageUrl = file.base64;
        uploadUserImage(user?.result?._id, imageUrl);
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

                    {file &&
                        <>
                            <button onClick={uploadImage}>
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