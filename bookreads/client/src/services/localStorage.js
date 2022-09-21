import { USER } from '../constants/user';

export const saveUser = (userData) => localStorage.setItem(USER, JSON.stringify(userData));

export const getUser = () => {
    const serializesUser = localStorage.getItem(USER);

    if (serializesUser) {
        const user = JSON.parse(serializesUser);
        return user;
    }
}

export const changeUserImage = (url) => {
    let user = getUser();
    user.result.imageUrl = url;

    saveUser(user);
}

export const removeUser = () => localStorage.removeItem(USER);

export const getToken = () => getUser()?.token;