import './Genres.css';

const Genres = () => {

    const handleFindGenre = () => {

    }

    return (
        <main className="main">
            <article className="genres__page--article">
                <section className="genres">
                    <h3 className="genres__title">
                        Genres
                    </h3>
                    <form className="genres__form">
                        <input className="genres__form--input" placeholder="Find a genre by name" />
                        <button
                            className="genres__form--button"
                            onClick={handleFindGenre}
                        >
                            Find genre
                        </button>
                    </form>

                    {/* TODO: Add books by some genre */}
                </section>
                <aside className="genres__aside">

                </aside>
            </article>
        </main>
    );
}

export default Genres;