import {
  wants,
  WANT_ADD,
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
});