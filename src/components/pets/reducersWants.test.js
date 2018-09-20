import {
  wants,
  WANT_ADD,
  // WANT_REMOVE,
} from './reducersWants';

describe.only('Wants reducers', () => {

  it('initializes to an empty array', () => {
    const state = wants(undefined, {});
    // console.log('***', state);
    expect(state).toEqual([]);
  });  

  it('adds wants', () => {
    const want1 = { name: 'fido' };
    const want2 = { name: 'whiskers' };
    const want3 = { name: 'augie' };

    const state = wants([want1, want2, want3], {
      type: WANT_ADD,
      payload: want3
    });

    expect(state).toEqual;([want1, want2, want3]);
  });

  
});