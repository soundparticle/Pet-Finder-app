export const WANT_ADD = 'WANT_ADD';
export const WANT_REMOVE = 'WANT_REMOVE';

export const getWants = state => state.wants;

export function wants(state = [], { type, payload }) {
  switch(type) {
    case WANT_ADD:
      return [...state, payload];
    case WANT_REMOVE:
      return state.filter(pet => pet.id === payload.id ? payload : pet);
    default:
      return state;
  }
}