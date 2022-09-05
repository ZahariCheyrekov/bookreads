import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
    const [notificationMessage, setNotificationMessage] = useState('');

    return (
        <NotificationContext.Provider
            value={{
                notificationMessage,
                setNotificationMessage
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}