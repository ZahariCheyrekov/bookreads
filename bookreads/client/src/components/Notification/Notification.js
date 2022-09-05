import { useContext, useEffect, useState } from 'react';

import { NotificationContext } from '../../contexts/NotificationContext';

import './Notification.css';

const Notification = () => {
    const { notificationMessage } = useContext(NotificationContext);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        setInterval(() => {
            setVisible(false);
        }, 5000);
    }, [notificationMessage]);

    return (
        <>
            {(isVisible && notificationMessage !== '') &&
                <section className={`notification active ${isVisible && 'active'}`}>
                    {notificationMessage}
                </section >
            }
        </>
    );
}

export default Notification;