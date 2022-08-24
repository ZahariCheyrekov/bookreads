import * as api from '../api/requester';

export const getPosts = async () => {
    try {
        const { data } = await api.getPosts();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const likePost = async (id) => {
    try {
        const { data } = await api.likePost(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}