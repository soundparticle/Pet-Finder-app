import {
  wants,
  WANT_ADD,
  // WANT_REMOVE,
  // WANT_REMOVE,
} from './reducersWants';

describe.only('Wants reducers', () => {

  it('initializes to an empty array', () => {
    const state = wants(undefined, {});
    expect(state).toEqual([]);
  });  

  it('adds wants', () => {
    const state = wants([{ name: 'fritz' }], { type: WANT_ADD, payload: { name: 'seymour' } });
    expect(state).toEqual([{ name: 'fritz' }, { name: 'seymour' }]);
  });

  // it('removes a want', () => {
  //   const want1 = { name: 'fido' };
  //   const want2 = { name: 'whiskers' };
  //   const want3 = { name: 'augie' };
    
  //   const state = wants([want1, want2, want3], {
  //     type: WANT_REMOVE,
  //     payload: want2
  //   });
  //   // console.log('**** state', state);
    
  //   expect(state).toEqual([
  //     want1,
  //     want3
  //   ]);
  // });
});