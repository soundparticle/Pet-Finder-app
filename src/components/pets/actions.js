import {  SEEKER_ADD, SEEKER_LOAD } from './reducers';
import { postSeeker, loadSeeker } from '../../services/api';

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

export const load = () => ({
  type: SEEKER_LOAD,
  payload: loadSeeker()
});