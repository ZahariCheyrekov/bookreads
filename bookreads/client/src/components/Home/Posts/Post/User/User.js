import { Link } from 'react-router-dom';

import defaultUserPhoto from '../../../../../assets/default-user-photo.png';
import { getUserLink } from '../../../../../utils/getUserLink';

import './User.css';

const User = ({ name, image, id, abs }) => {
    return (
        <>
            {name ?
                <Link to={getUserLink(name, id)}>
                    <article className={`post__user ${abs && 'abs'}`}>
                        <img className="user__img"
                            src={
                                image ? image : defaultUserPhoto
                            }
                            alt={`${name}`}
                        />
                    </article>
                </Link>
                : null
            }
        </>
    );
}

export default User;