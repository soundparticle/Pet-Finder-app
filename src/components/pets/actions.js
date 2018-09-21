import {  SEEKER_ADD, SEEKER_LOAD } from './reducers';
import { postSeeker, loadSeeker } from '../../services/api';

export const addSeeker = data => ({
  type: SEEKER_ADD,
  payload: postSeeker(data)
});

export const load = () => ({
  type: SEEKER_LOAD,
  payload: loadSeeker()
});