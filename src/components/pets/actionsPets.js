import { 
  PETS_LOAD, 
  PETSBYOWNER_LOAD, 
  PET_ADD, 
  PET_UPDATE, 
  PET_REMOVE,
  PET_FILTER
  // MATCH_ADD 
} from './reducersPets';

// need both PETS_LOAD and PETSBYOWNER_LOAD ??
import { 
  deletePet, 
  getPetsByOwner, 
  getPets, 
  postPet, 
  putPet,
  getPetFilter, 
  // putMatch
} from '../../services/api';

export const loadPets = () => ({
  type: PETS_LOAD,
  payload: getPets()
});

export const loadPetsByOwner = () => ({
  type: PETSBYOWNER_LOAD,
  payload: getPetsByOwner()
});

export const filterPets = options => ({
  type: PET_FILTER,
  payload: getPetFilter(options)
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

// export const addMatch = id => ({
//   type: MATCH_ADD,
//   payload: putMatch(id)
// });
