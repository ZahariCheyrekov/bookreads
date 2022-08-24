import { Link } from 'react-router-dom';

import defaultUserPhoto from '../../../../../assets/default-user-photo.png';

import './User.css';

const User = ({ user, creatorId, abs }) => {

    return (
        <Link to={`/user/${user?.split(' ').join('').toLowerCase()}/${creatorId}`}>
            <article className={`post__user ${abs && 'abs'}`}>
                <img className="user__img" src={user?.result?.imageUrl ? user?.result?.imageUrl : defaultUserPhoto}
                    alt={`${user?.result?.name}`}
                />
            </article>
        </Link>
    );
}

export default User;