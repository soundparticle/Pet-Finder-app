export const INTERESTED_LOAD = 'INTERESTED_LOAD';
export const FAVORITES_LOAD = 'FAVORITES_LOAD';

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

export function favorites(state = [], { type, payload }) {
  switch(type) {
    case FAVORITES_LOAD:
      return payload;
    default:
      return state;
  }
}