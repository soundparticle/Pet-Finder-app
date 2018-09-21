import { MATCHES_LOAD } from './reducers';
import { getPetMatches } from '../../services/api';

export const loadMatches = data => ({
  type: MATCHES_LOAD,
  payload: getPetMatches(data)
});

