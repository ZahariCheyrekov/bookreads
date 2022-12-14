import { API } from '../../../lib/axios';


export const getUserReviewForBook = (bookId, userId) => API.get(`/books/${bookId}/${userId}`);

export const getReviewsById = (bookId) => API.get(`/books/${bookId}/reviews`);

export const createReview = (bookId, reviewData) => API.post(`/review/edit/${bookId}`, reviewData);

export const likeReview = (reviewId, like) => API.post(`/books/${reviewId}`, { like });

export const commentOnReview = (reviewId, commentData) => API.post(`/books/${reviewId}/comment`, commentData);

export const deleteReviewById = (reviewId) => API.delete(`/reviews/${reviewId}`);

export const deleteReviewComment = (reviewId, commentId) => API.delete(`/books/${reviewId}/comment/${commentId}`,);