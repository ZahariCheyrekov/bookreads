import Navigation from "./Navigation/Navigation";

import './Header.css';
import books from '../../assets/books-banner.png'

const Header = () => {
    return (
        <header className="header">
            <Navigation />

            <section className="header__section">
                <article className="section__article" >
                    <article className="article__article article__article--info">
                        <h3 className="article__title--small">
                            A place to find your next book.
                        </h3>
                        <h2 className="article__title--big">
                            Tell the world what you are reading.
                        </h2>
                    </article>

                    <img className="article__books article__books--img" src={books} alt="books" />
                </article>
            </section>
        </header>
    );
}

export default Header;