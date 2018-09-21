import { addWant, /*removeWant*/ } from './actionsWants'; //put
import { WANT_ADD, /*WANT_REMOVE*/ } from './reducersWants'; //WANT_PUT
import { postWant, /*deleteWant*/ } from '../../services/api'; //putWant

jest.mock('../../services/api.js', () => ({
  getWants: jest.fn(),
  postWant: jest.fn(),
  deleteWant: jest.fn(),
  putWant: jest.fn()
}));

describe('wants action creators', () => {

  it('adds a want', () => {
    const want = { name: 'seymour' };
    const promise = Promise.resolve();
    postWant.mockReturnValueOnce(promise);

    const { type, payload } = addWant(want);
    expect(type).toBe(WANT_ADD);
    expect(payload).toBe(promise);
    expect(postWant.mock.calls.length).toBe(1);
    expect(postWant.mock.call[0][0]).toBe(want);
  });
});