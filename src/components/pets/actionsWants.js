import { 
  WANT_ADD,
  WANT_REMOVE
} from './reducersWants';

import { 
  putWant, 
  deleteWant 
} from '../../services/api';



export const addWant = (id) => ({
  type: WANT_ADD,
  payload: putWant(id)
});

export const removeWant = (id) => ({
  type: WANT_REMOVE,
  payload: deleteWant(id).then(() => id)
});
