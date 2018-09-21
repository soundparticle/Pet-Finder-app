import { get, post, put, del } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SEEKER_URL = `${URL}/seekers`;
const PETS_URL = `${URL}/pets`;

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);
export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});

export const postSeeker = details => post(SEEKER_URL, details);
export const loadSeeker = () => get(SEEKER_URL);

export const putFavorite = favorite => put(`${SEEKER_URL}/favorites`, favorite); 
export const getPetFilter = options => get(`${PETS_URL}/filter${options}`);
export const getPetsByOwner = () => get(`${PETS_URL}/owner`);


export const getPetMatches = pet => {
  return get(`${PETS_URL}/matches/${pet._id}`);
};


export const getPets = () => get(PETS_URL);
export const postPet = data => post(PETS_URL, data);
export const deletePet = id => del(`${PETS_URL}/${id}`);
export const putPet = pet => {
  //id vs _id
  const { id, ...copy } = pet;
  return put(`${PETS_URL}/${id}`, copy);
};

export const putMatch = id => put(`${PETS_URL}/${id}/matches`);
export const putWant = want => put(`${SEEKER_URL}/wants`, want);
export const deleteWant = id => del(`${SEEKER_URL}/${id}`);

