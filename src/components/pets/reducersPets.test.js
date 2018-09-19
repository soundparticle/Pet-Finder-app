import {
  pets,
  //PETS_LOAD, SR: do we even need this? if so, need that test.
  PET_LOAD,
  PET_ADD,
  PET_UPDATE,
  PET_REMOVE,
} from './reducersPets';

describe('pets reducers', () => {

  it('initializes to empty array', () => {
    const state = pets(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads pets', () => {
    const payload = [{}, {}, {}];

    const state = pets([], {
      type:PET_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds pet', () => {
    const pet1 = { name: 'Fauna' };
    const pet2 = { name: 'Mavis' };
    const pet3 = { name: 'Looney' };

    const state = pets([pet1, pet2], {
      type: PET_ADD,
      payload: pet3
    });

    expect(state).toEqual;([pet1, pet2, pet3]);
  });

  it('updates a pet', () => {
    const pet1 = { id: '1', name: 'Bug' };
    const pet2 = { id: '2', name: 'Lil Smart Ginna' };
    const pet3 = { id: '3', name: 'Grumpa' };

    const updated = { id: '2', name: 'Big Dumb Ginna' };

    const state = pets([pet1, pet2, pet3], { 
      type: PET_UPDATE,
      payload: updated
    });

    expect(state).toEqual([
      pet1, 
      updated, 
      pet3
    ]);
  });

  it('removes a pet', () => {
    const pet1 = { id: '1', name: 'Anna' };
    const pet2 = { id: '2', name: 'Plastic' };
    const pet3 = { id: '3', name: 'Barbell' };

    const state = pets([pet1, pet2, pet3], {
      type: PET_REMOVE,
      payload: '2'
    });

    console.log('state', state);
    expect(state).toEqual([
      pet1, 
      pet3,
    ]);
  });
});