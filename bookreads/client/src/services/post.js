import * as api from '../api/requester';

export const getPosts = async () => {
    try {
        const { data } = await api.getPosts();
        return data;
    } catch (error) {
        console.log(error);
    }
}