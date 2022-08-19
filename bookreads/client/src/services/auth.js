import * as api from '../api/requester';

export const signin = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signin(userData);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const signup = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signup(userData);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}