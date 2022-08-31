import * as userAPI from '../api/userAPI';

export const getUserById = async (id) => {
    try {
        const { data } = await userAPI.getUserById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getUserPostsById = async (name, userId) => {
    try {
        const { data } = await userAPI.getPostsByUserId(name, userId);
        return data;
    } catch (error) {
        console.log(error);
    }
}