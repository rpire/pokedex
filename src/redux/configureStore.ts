import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import pagesReducer from './reducers/pages';
import pokemonReducer from './reducers/pokemon';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const logger = createLogger({
  collapsed: true,
  level: 'info',
  duration: true,
});

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  page: pagesReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
