import { USER } from '../constants/userConstants';

export const saveUser = (userData) => localStorage.setItem(USER, JSON.stringify(userData));

export const getUser = () => {
    const serializesUser = localStorage.getItem(USER);

    if (serializesUser) {
        const user = JSON.parse(serializesUser);
        return user;
    }
}

export const removeUser = () => localStorage.removeItem(USER);

export const getToken = () => getUser()?.token;