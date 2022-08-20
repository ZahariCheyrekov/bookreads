import { gapi } from 'gapi-script'

import { GOOGLE_SCOPE } from '../constants/google';

export const googleFailure = (error) => {
    console.log(error);
    console.log('Google sign in was unsuccessful. Try again later.');
}

export const start = () => {
    gapi.client.init({
        clientId: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
        scope: GOOGLE_SCOPE,
    });
}