import * as profileAPI from '../api/profileAPI';
import { TOO_BIG_FILE } from '../constants/profile';

export const uploadImageService = async (userId, imageUrl, imageSize) => {
    try {
        if (imageSize > 50) {
            throw new Error(TOO_BIG_FILE);
        }
        
        await profileAPI.uploadUserImage(userId, imageUrl);

    } catch (error) {
        console.log(error);

        if (error.response) {
            notifyError(error.response.data.message);
        } else {
            notifyError(error.message);
        }
    }
}

