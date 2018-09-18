import { get, post } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const INTERESTED_URL = `${URL}/interested`;
const FAVORITES_URL = `${URL}/favorites`;

export const getPetsInterested = () => get(INTERESTED_URL);
export const getPetsFavorites = () => get(FAVORITES_URL);

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});
