export const MATCHES_LOAD = 'MATCHES_LOAD';

export const getMatches = state => state.matches;

export function matches(state = null, { type, payload }) {
  switch(type) {
    case MATCHES_LOAD:
      return payload;
    default:
      return state;
  }
}
