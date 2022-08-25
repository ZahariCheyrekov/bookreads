import * as api from '../api/requester';

export const getPosts = async () => {
    try {
        const { data } = await api.getPosts();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const likePost = async (postId, userId, userName) => {
    try {
        const { data } = await api.likePost(postId, userId, userName);
        return data;
    } catch (error) {
        console.log(error);
    }
}