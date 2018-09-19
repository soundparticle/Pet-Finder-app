import { loadPets, addPet, removePet } from './actionsPets'; //put
import { PETS_LOAD, PET_ADD, PET_REMOVE } from './reducersPets'; //PET_PUT
import { getPets, postPet, deletePet } from '../../services/api'; //putPet

jest.mock('../../services/api.js', () => ({
  getPets: jest.fn(),
  postPet: jest.fn(),
  deletePet: jest.fn(),
  //putPet: jest.fn()
}));


describe.only('pets action creators', () => {

  it('loads pets', () => {
    const promise = Promise.resolve();
    getPets.mockReturnValueOnce(promise);

    const { type, payload } = loadPets();
    expect(type).toBe(PETS_LOAD);
    expect(payload).toBe(promise);
    expect(getPets.mock.calls.length).toBe(1);
  });

  it('adds a pet', () => {
    const pet = { name: 'Glow Worm the Cat' };
    const promise = Promise.resolve();
    postPet.mockReturnValueOnce(promise);

    const { type, payload } = addPet(pet);
    expect(type).toBe(PET_ADD);
    expect(payload).toBe(promise);
    expect(postPet.mock.calls.length).toBe(1);
    expect(postPet.mock.calls[0][0]).toBe(pet);
  });

  it('removes a pet', () => {
    const promise = Promise.resolve();
    deletePet.mockReturnValueOnce(promise);
    const id = 123;

    const { type, payload } = removePet(id);
    expect(type).toBe(PET_REMOVE);
    expect(deletePet.mock.calls.length).toBe(1);
    expect(deletePet.mock.calls[0][0]).toBe(id);

    return payload.then(idToDelete => {
      expect(idToDelete).toBe(id);
    });
  });
});