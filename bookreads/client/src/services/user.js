import * as api from '../api/requester';

export const getUserById = async (id) => {
    try {
        const { data } = await api.getUserById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}