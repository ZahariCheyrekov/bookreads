import * as userAPI from '../../../api/userAPI';

import { saveUser } from '../../../services/localStorage';
import { SIGN_IN, SIGN_UP } from '../constants/actionTypes';

export const auth = async (action, data) => {
    try {
        let result;

        if (action === SIGN_IN) {
            result = await userAPI.signin(data);
        } else if (action === SIGN_UP) {
            result = await userAPI.signup(data);
        }

        const user = result.data;
        saveUser(user);
        
    } catch (error) {
        console.log(error);
    }
}