export const PETS_LOAD = 'PETS_LOAD';
// add pet load
export const PET_ADD = 'PET_ADD';
export const PET_UPDATE = 'PET_UPDATE';
export const PET_REMOVE = 'PET_REMOVE';

export const getPets = state => state.pets;

export function pets(state = [], { type, payload }) {
  switch(type) {
    case PETS_LOAD:
      return payload;
    case PET_ADD:
      return [...state, payload];
    case PET_UPDATE:
      return state.map(pet => pet._id === payload._id ? payload : pet);
    case PET_REMOVE:
      return state.filter(pet => pet._id !== payload);
    default:
      return state;
  }
}

// pet 