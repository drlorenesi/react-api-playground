import axios from 'axios';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/react';

// Global unpexpected error handler
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // Log error
    // console.log('Logging error: ', error);
    Sentry.captureException(error);
    toast.error('An unexpected error ocurred.', {
      autoClose: 5000,
    });
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
