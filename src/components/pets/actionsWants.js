import { 
  WANT_ADD,
  WANT_REMOVE
} from './reducersWants';

import { 
  putWant, 
  deleteWant 
} from '../../services/api';

export const addWant = (want) => ({
  type: WANT_ADD,
  payload: putWant(want)
});

export const removeWant = (id) => ({
  type: WANT_REMOVE,
  payload: deleteWant(id).then(() => id)
});
