import GenreList from '../../../genres/components/GenreList';

import './Search.css';

const Search = () => {
    return (
        <main className="main">
            <div className="search__wrapper">
                <section className="search__section">
                    <h3 className="search__section--title">
                        Search
                    </h3>
                    <form className="search__form">
                        <input className="search__form--input" />
                        <button className="search__form--button">Search</button>
                    </form>
                </section>
                <GenreList />
            </div>
        </main>
    );
}

export default Search;