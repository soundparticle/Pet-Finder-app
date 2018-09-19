import {  SEEKER_ADD } from './reducers';
import { postSeeker } from '../../services/api';

// export const loadInterested = () => ({
//   type: INTERESTED_LOAD,
//   payload: getPetsInterested()
// });

// export const loadFavorites = () => ({
//   type: FAVORITES_LOAD,
//   payload: getPetsInterested()
// });

export const addSeeker = data => ({
  type: SEEKER_ADD,
  payload: postSeeker(data)
});
