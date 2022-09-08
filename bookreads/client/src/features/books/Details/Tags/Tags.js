import { Link } from 'react-router-dom';

import './Tags.css';

const Tags = ({ tags }) => {
    return (
        <ul className="book__tags">
            {tags.map((tag, index) =>
                <li key={index} className="book__tag">
                    <Link to={`/genres/${tag.toLowerCase().split(' ').join('-')}`}>
                        {tag}
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default Tags;