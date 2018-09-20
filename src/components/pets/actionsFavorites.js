import { FAVORITE_ADD, FAVORITE_REMOVE } from './reducersFavorites';
import { putFavorite } from '../../services/api';

export const addFavorite = (pet) => ({
  type: FAVORITE_ADD,
  payload: putFavorite(pet)
});

export const removeFavorite = () => ({
  type: FAVORITE_REMOVE,
  payload: null
});