import * as userAPI from '../../../api/userAPI';

import { saveUser } from '../../../services/localStorage';
import { validateInputFields } from '../../../validation/validateInputFields';
import { notify } from '../../../lib/toastify';

import { SIGN_IN, SIGN_UP } from '../constants/actionTypes';
import { ALL_FIELDS_ARE_REQUIRED } from '../../../constants/errors';

export const auth = async (action, data, navigate) => {
    try {
        let result;

        if (action === SIGN_IN) {
            const dataForValidation = {
                email: data.email,
                password: data.password
            }

            const isValidInput = validateInputFields(dataForValidation);

            if (isValidInput) {
                throw new Error(ALL_FIELDS_ARE_REQUIRED);
            }

            result = await userAPI.signin(data);

        } else if (action === SIGN_UP) {
            const isValidInput = validateInputFields(data);

            if (!isValidInput) {
                throw new Error(ALL_FIELDS_ARE_REQUIRED);
            }

            const

                result = await userAPI.signup(data);

        }

        const user = result.data;
        saveUser(user);
        navigate('/');

    } catch (error) {
        console.log(error);
        notify(error.message);
    }
} 