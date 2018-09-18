export const SEEKER_AUTH = 'SEEKER_AUTH';

export const getSeeker = state => state.seeker;

export function seeker(state = null, { type, payload }) {
  switch(type) {
    case SEEKER_AUTH:
      return payload;
    default: 
      return state;
  }
}


// check and see if user is also a seeker

// if not - redirect to seeker form

// otherwise present pets to user