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

export const getComments = async (postId) => {
    try {
        const { data } = await api.getComments(postId);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getPostLikes = async (postId) => {
    try {
        const { data } = await api.getPostLikes(postId);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createComment = async (postId, commentData) => {
    try {
        const { data } = await api.createComment(postId, commentData);
        return data;
    } catch (error) {
        console.log(error);
    }
}