import { PETS_LOAD, PET_LOAD, PET_ADD, PET_UPDATE, PET_REMOVE } from './reducersPets';
// need both PETS_LOAD and PET_LOAD ??
import { deletePet, getPet, getPets, postPet, putPet } from '../../services/api';

export const loadPets = () => ({
  type: PETS_LOAD,
  payload: getPets()
});

export const loadPet = id => ({
  type: PET_LOAD,
  payload: getPet(id)
});

export const addPet = data => ({
  type: PET_ADD,
  payload: postPet(data)
});

export const removePet = id => ({
  type: PET_REMOVE,
  payload: deletePet(id).then(() => id)
});

export const updatePet = pet => ({
  type: PET_UPDATE,
  payload: putPet(pet)
});
