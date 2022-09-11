import * as userAPI from '../../../api/userAPI';

import { saveUser } from '../../../services/localStorage';
import { validateInputFields } from '../../../validation/validateInputFields';
import { validatePasswordEquality } from '../../../validation/validatePasswordEquality';

import { notify } from '../../../lib/toastify';

import { SIGN_IN, SIGN_UP } from '../constants/actionTypes';
import { ALL_FIELDS_ARE_REQUIRED, PASSWORDS_DONT_MATCH } from '../../../constants/errors';

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

            const validPassword = validatePasswordEquality(data.password, data.repeatPassword);

            if (!validPassword) {
                throw new Error(PASSWORDS_DONT_MATCH);
            }

            result = await userAPI.signup(data);
        }

        const user = result.data;
        saveUser(user);
        navigate('/');

    } catch (error) {
        console.log(error);

        if (error.response) {
            notify(error.response.data.message);
        } else {
            notify(error.message);
        }
    }
} 