import { INTERESTED_LOAD, FAVORITES_LOAD } from './reducers';

import { getPetsInterested } from '../../services/api';

export const loadInterested = () => ({
  type: INTERESTED_LOAD,
  payload: getPetsInterested()
});

export const loadFavorites = () => ({
  type: FAVORITES_LOAD,
  payload: getPetsInterested()
});