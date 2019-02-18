import {STATUS_REPLACE} from './types';

/**
  * Show Error
  */
export default function (dispatch, type, val) {
  return new Promise(async (resolve, reject) => {
    // Validate types
    const allowed = ['error', 'success', 'info', 'loading', 'refreshing'];
    if (!allowed.includes(type)) {
      return reject('Type should be one of success, error or info');
    }

    // Set some defaults for convenience
    let message = val;
    if (!val) {
      if (type === 'success') message = 'Success';
      if (type === 'error') message = 'Sorry, an error occurred';
      if (type === 'info') message = 'Something is happening...';
      if (type === 'loading' && val !== false) message = true;
      if (type === 'refreshing' && val !== false) message = true;
    }

    return resolve(dispatch({
      type: STATUS_REPLACE,
      [type]: message
    }));
  });
}
