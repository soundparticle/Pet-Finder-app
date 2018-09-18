import { INTERESTED_LOAD, FAVORITES_LOAD, SEEKER_AUTH } from './reducers';
// TODO: BRING IN POST API CALL TO SEEKER MODEL
import { getPetsInterested } from '../../services/api';

export const seekerDetails = () => ({
  type: SEEKER_AUTH,
  payload: null

export const loadInterested = () => ({
  type: INTERESTED_LOAD,
  payload: getPetsInterested()
});

export const loadFavorites = () => ({
  type: FAVORITES_LOAD,
  payload: getPetsInterested()
});