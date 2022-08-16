import Navigation from "./Navigation/Navigation";

import './Header.css';
import books from '../../assets/books-banner.png'

const Header = () => {
    return (
        <header className="header">
            <Navigation />
            <section className="header__section">
                <article className="section__article section__article--books" >
                    <img className="article__books article__books--img" src={books} alt="books" />
                </article>
            </section>
        </header>
    );
}

export default Header;