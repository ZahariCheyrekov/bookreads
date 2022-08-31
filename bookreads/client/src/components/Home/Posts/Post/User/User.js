import { Link } from 'react-router-dom';

import defaultUserPhoto from '../../../../../assets/default-user-photo.png';
import { getUserLink } from '../../../../../utils/getUserLink';

import './User.css';

const User = ({ user, abs }) => {
    return (
        <>
            {user ?
                <Link to={getUserLink(user.name, user.id)}>
                    <article className={`post__user ${abs && 'abs'}`}>
                        <img className="user__img"
                            src={
                                user.imageUrl ? user.imageUrl : defaultUserPhoto
                            }
                            alt={`${user.name}`}
                        />
                    </article>
                </Link>
                : null
            }
        </>
    );
}

export default User;