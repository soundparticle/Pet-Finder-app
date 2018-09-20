import { addWant, removeWant } from './actionsWants'; //put
import { WANT_ADD, WANT_REMOVE } from './reducersWants'; //PET_PUT
import { getWants, postWant, deleteWant } from '../../services/api'; //putPet

jest.mock('../../services/api.js', () => ({
  getWants: jest.fn(),
  postWant: jest.fn(),
  deleteWant: jest.fn(),
  //putPet: jest.fn()
}));

describe('wants action creators', () => {

  it('adds a want', () => {
    const want = { name: 'fritz' };
    const promise = Promise.resolve();
    postWant.mockReturnValueOnce(promise);

    const { type, payload } = addWant(want);
    expect(type).toBe(WANT_ADD);
    expect(payload).toBe(promise);
    expect(getWants.mock.calls.length).toBe(1);
  });
});