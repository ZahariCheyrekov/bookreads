import { useContext } from 'react';
import { Link } from 'react-router-dom';

import defaultUserPhoto from '../../../../../assets/default-user-photo.png';
import { AuthContext } from '../../../../../contexts/AuthContext';
import { getUserLink } from '../../../../../utils/getUserLink';

import './User.css';

const User = ({ abs }) => {
    const { user } = useContext(AuthContext);

    return (
        <Link to={getUserLink(user.result.name, user.result._id)}>
            <article className={`post__user ${abs && 'abs'}`}>
                <img className="user__img"
                    src={
                        user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto
                    }
                    alt={`${user?.result?.name}`}
                />
            </article>
        </Link>
    );
}

export default User;