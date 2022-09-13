import { API } from '../../../lib/axios';


export const signin = (userData) => API.post(`/user/signin`, userData);

export const signup = (userData) => API.post(`/user/signup`, userData);