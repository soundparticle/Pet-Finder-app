export const SEEKER_ADD = 'SEEKER_ADD';
export const SEEKER_LOAD = 'SEEKER_LOAD';

export const getSeeker = state => state.seeker;

export function seeker(state = [], { type, payload }) {
  switch(type) {
    case SEEKER_LOAD:
      return payload;
    case SEEKER_ADD: 
      return payload;
    default:
      return state;
  }
}
