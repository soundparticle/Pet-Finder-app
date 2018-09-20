import { 
  FAVORITES_LOAD,
  FAVORITE_ADD, 
  FAVORITE_REMOVE,
} from './reducersFavorites';
import { putFavorite, loadSeeker } from '../../services/api';

export const loadFavorites = () => ({
  type: FAVORITES_LOAD,
  payload: loadSeeker().then()
});

export const addFavorite = pet => ({
  type: FAVORITE_ADD,
  payload: putFavorite(pet)
});

export const removeFavorite = () => ({
  type: FAVORITE_REMOVE,
  payload: null
});