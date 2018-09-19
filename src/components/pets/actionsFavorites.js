import { FAVORITE_ADD, FAVORITE_REMOVE } from './reducersFavorites';
import { getFavorites } from '../../services/api';

export const addFavorite = (favorite) => ({
  type: FAVORITE_ADD,
  payload: getFavorites(favorite)
});

export const removeFavorite = (favorite) => ({
  type: FAVORITE_REMOVE,
  payload: null
});