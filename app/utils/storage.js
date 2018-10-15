import { LOGIN_SUCCESS } from 'containers/LoginPage/constants';

export const getItemFromStorage = key => localStorage.getItem(key);

export const getObjectFromStorage = key => {
  const o = localStorage.getItem(key);

  if (!o) {
    return null;
  }

  try {
    return JSON.parse(o);
  } catch (e) {
    return null;
  }
};

export const setItemInStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const setObjectInStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const localStorageMiddleware = () => next => action => {
  const result = next(action);
  const { type } = result;

  if (type === LOGIN_SUCCESS) {
    const { token, username } = result.response;
    setItemInStorage('token', token);
    setItemInStorage('username', username);
  }

  return result;
};
