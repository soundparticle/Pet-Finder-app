export const SEEKER_ADD = 'SEEKER_ADD';

export const getSeeker = state => state.seeker;

export function seeker(state = null, { type, payload }) {
  switch(type) {
    case SEEKER_ADD:
      return payload;
    default:
      return state;
  }
}
