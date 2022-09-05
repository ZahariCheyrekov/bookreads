import { useContext, useEffect, useState } from 'react';

import { NotificationContext } from '../../contexts/NotificationContext';

import './Notification.css';

const Notification = () => {
    const { notificationMessage } = useContext(NotificationContext);
    const [message, seetMessage] = useState('');
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (message === notificationMessage) {
            seetMessage('');
        }

        seetMessage(notificationMessage);
        setVisible(true);
    }, [message, notificationMessage]);

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