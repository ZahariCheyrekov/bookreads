import * as postAPI from '../api/postAPI';

export const getPosts = async () => {
    try {
        const { data } = await postAPI.getPosts();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const likePost = async (postId, userId, userName) => {
    try {
        const { data } = await postAPI.likePost(postId, userId, userName);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getComments = async (postId) => {
    try {
        const { data } = await postAPI.getComments(postId);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getPostLikes = async (postId) => {
    try {
        const { data } = await postAPI.getPostLikes(postId);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createComment = async (postId, commentData) => {
    try {
        const { data } = await postAPI.createComment(postId, commentData);
        return data;
    } catch (error) {
        console.log(error);
    }
}