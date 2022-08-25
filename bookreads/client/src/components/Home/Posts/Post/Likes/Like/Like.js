import { Link } from "react-router-dom";

import './Like.css';

const Like = ({ name, userId }) => {
    return (
        <Link to={`/user/${name.split(' ').join('').toLowerCase()}/${userId}`}>
            <strong className="post__user--like">
                {name}
            </strong>
        </Link>
    )
}
export default Like;