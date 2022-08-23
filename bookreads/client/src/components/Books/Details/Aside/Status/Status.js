import './Status.css';

const Status = () => {
    return (
        <div className="book__status--wrapper">
            <section className="book__status--section">
                <h4 className="book__status--title">
                    Choose a shelf for this book:
                </h4>
                <button className="aside__book--button"></button>
                <button className="aside__book--button"></button>
                <button className="aside__book--button"></button>
            </section>
        </div>
    );
}

export default Status;