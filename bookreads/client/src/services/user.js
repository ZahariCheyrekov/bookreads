import * as userAPI from '../api/userAPI';

export const getUserById = async (id) => {
    try {
        const { data } = await userAPI.getUserById(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}