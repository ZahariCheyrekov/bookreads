import * as api from '../api/requester';

import { saveUser } from './localStorage';
import { SIGN_IN, SIGN_UP } from '../constants/actionType';

export const auth = async (action, data, navigate) => {
    try {
        let result;

        if (action === SIGN_IN) {
            result = await api.signin(data);
        } else if (action === SIGN_UP) {
            result = await api.signup(data);
        }

        const user = result.data;
        saveUser(user);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}