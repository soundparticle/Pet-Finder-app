import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/reducers';
import { user, checkedAuth } from '../components/auth/reducers';
import { seeker } from '../components/pets/reducers';
import { pets } from '../components/pets/reducersPets';
import { favorites } from '../components/pets/reducersFavorites';
import { wants } from '../components/pets/reducersWants';

const rootReducer = combineReducers({
  error,
  loading,
  user,
  seeker,
  pets,
  checkedAuth,
  favorites,
  wants
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;
