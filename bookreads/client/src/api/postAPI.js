import { API } from './api';

export const getPosts = () => API.get('/');

export const getComments = (postId) => API.get(`/post/${postId}/comments`);

export const getPostLikes = (postId) => API.get(`/post/${postId}/likes`);

export const createPost = (postData) => API.post('/', postData);

export const likePost = (postId, userId, userName) => API.post(`/posts/${postId}`, { userId, userName });

export const createComment = (postId, commentData) => API.post(`/post/${postId}/comment`, commentData);

export const deleteComment = (postId, commentId) => API.delete(`/post/${postId}/comment/${commentId}`);