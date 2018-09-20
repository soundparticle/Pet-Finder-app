export const PETS_LOAD = 'PETS_LOAD';
// SR: not sure if need pets_load
export const PET_LOAD = 'PET_LOAD';
export const PET_ADD = 'PET_ADD';
export const PET_UPDATE = 'PET_UPDATE';
export const PET_REMOVE = 'PET_REMOVE';
export const PET_FILTER = 'PET_FILTER';

export const getPets = state => state.pets;

export function pets(state = [], { type, payload }) {
  switch(type) {
    case PETS_LOAD:
      return payload;
    case PET_LOAD:
      return payload;
    case PET_ADD:
      return [...state, payload];
    case PET_FILTER:
      return payload;
    case PET_UPDATE:
      return state.map(pet => pet.id === payload.id ? payload : pet);
    case PET_REMOVE:
      return state.filter(pet => pet.id !== payload);
    default:
      return state;
  }
}
