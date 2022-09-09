import GenreList from '../../../genres/components/GenreList';

import './Search.css';

const Search = () => {
    return (
        <main className="main">
            <div className="search__wrapper">
                <section className="search__section">
                    <h4 className="search__section--title">

                    </h4>
                </section>
                <GenreList />
            </div>
        </main>
    );
}

export default Search;