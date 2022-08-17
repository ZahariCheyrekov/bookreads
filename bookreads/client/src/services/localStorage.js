import { USER } from '../constants/userConstants';

const saveUser = (userData) => localStorage.setItem(USER, JSON.stringify(userData));

const getUser = () => {
    const serializesUser = localStorage.getItem(USER);

    if (serializesUser) {
        const user = JSON.parse(serializesUser);
        return user;
    }
}

const removeUser = () => localStorage.removeItem(USER);

const getToken = () => getUser()?.token;