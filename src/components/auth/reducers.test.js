import {
  user,
  getUser,
  USER_AUTH,
  LOGOUT,
  checkedAuth,
  CHECKED_AUTH
} from './reducers';

describe ('user reducer', () => {

  it('initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('checks auth', () => {
    const state = checkedAuth(false, { type: CHECKED_AUTH });
    expect(state).toBe(true);
  });

  it('loads a user', () => {
    const data = {
      name: 'user',
      email: 'test@test.com'
    };

    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toEqual(data);
  });

  it('clears user on logout', () => {
    const state = user({}, { type: LOGOUT });
    expect(state).toBe(null);
  });

  it('gets user from state', () => {
    const user = { name: 'user' };
    expect(getUser({ user })).toBe(user);
  });

});