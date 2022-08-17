import Header from './Header/Header';

import './Welcome.css';

const Welcome = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="main__wrapper">
                    <section className="wrapper__section wrapper__section--about">
                        <article className="section__article section__article--about">
                            <h4 className="article__title">
                                Deciding what to read next?
                            </h4>
                            <p className="article__paragraph">
                                You're in the right place. Tell us what titles or genres
                                you've enjoyed in the past, and we'll give you surprisingly
                                insightful recommendations.
                            </p>
                        </article>
                        <article className="section__article section__article--about">
                            <h4 className="article__title">
                                What are your friends reading?
                            </h4>
                            <p className="article__paragraph">
                                Chances are your friends are discussing their favorite
                                (and least favorite) books on Bookreads.
                            </p>
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Welcome;