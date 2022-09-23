import { USER } from '../constants/user';

export const saveUser = (userData) => {
    const user = {
        result: {
            name: userData.result.name,
            _id: userData.result._id,
            shelves: userData.result.shelves,
            imageUrl: userData.result.imageUrl
        },
        token: userData.token
    }

    localStorage.setItem(USER, JSON.stringify(user));
    console.log(user)
}

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