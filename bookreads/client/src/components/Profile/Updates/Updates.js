import './Updates.css';

const Updates = () => {
    return (
        <section className="profile__updates">
            <h5 className="profile__updates--title">
                {currentUser.name.split(' ')[0]}'s recent updates
            </h5>
        </section>
    );
}

export default Updates;