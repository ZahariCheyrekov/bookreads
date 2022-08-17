import { gapi } from 'gapi-script'
import { GOOGLE_SCOPE } from '../constants/googleConstants';

export const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
        console.log(result, token)
    } catch (error) {
        console.log(error);
    }
}

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