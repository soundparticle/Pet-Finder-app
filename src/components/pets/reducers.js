export const SEEKER_AUTH = 'SEEKER_AUTH';
export const INTERESTED_LOAD = 'INTERESTED_LOAD';
export const FAVORITES_LOAD = 'FAVORITES_LOAD';

export const getSeeker = state => state.seeker;

export const getInterested = state => state.interested;
export const getFavorites = state => state.favorites;


export function interested(state = [], { type, payload }) {
  switch(type) {
    case INTERESTED_LOAD:
      return payload;
    default:
      return state;
  }
}

export function seeker(state = null, { type, payload }) {
  switch(type) {
    case SEEKER_AUTH:
      return payload;
    default: 
      return state;

// check and see if user is also a seeker

// if not - redirect to seeker form

// otherwise present pets to user
export function favorites(state = [], { type, payload }) {
  switch(type) {
    case FAVORITES_LOAD:
      return payload;
    default:
      return state;
  }
}
