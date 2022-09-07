import { Link } from 'react-router-dom';

import { genres } from '../../constants/shelves';

import './GenreList.css';

export const GenreList = () => {
    return (
        <aside className="genres__aside">
            <h3 className="genres__aside--title genres__title">
                Browse
            </h3>
            <ul className="genres__aside--list">
                {genres.map(genre =>
                    <li
                        key={genre}
                        className="genres__aside__list--item"
                    >
                        <Link to={`/genres/${genre.toLowerCase()}`}>
                            {genre}
                        </Link>
                    </li>
                )}
            </ul>
        </aside>
    );
}

export default GenreList;