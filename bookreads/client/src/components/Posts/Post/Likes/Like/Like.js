import { Link } from 'react-router-dom';

import { getUserLink } from '../../../../../utils/getUserLink';

import './Like.css';

const Like = ({ name, userId }) => {
    return (
        <Link to={getUserLink(name, userId)}>
            <strong className="post__user--like">
                {name}
            </strong>
        </Link>
    )
}
export default Like;