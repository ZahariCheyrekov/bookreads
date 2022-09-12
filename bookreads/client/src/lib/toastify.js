import { toast } from 'react-toastify';

export const notify = (message) => toast(message);

export const notifyError = (error) => toast.error(error);