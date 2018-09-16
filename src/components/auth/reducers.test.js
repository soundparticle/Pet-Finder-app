import {
  user,
  // getUser,
  // USER_AUTH,
  // LOGOUT
} from './reducers';

describe ('user reducer', () => {

  it('initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });


});