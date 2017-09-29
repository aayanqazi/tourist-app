import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import AuthReducer from './reducers/auth';
import PlacesReducer from './reducers/places';

import AuthEpic from "./epic/auth";
import PlacesEpic from "./epic/places";

//combine epic
const rootEpic = combineEpics(
  AuthEpic.loginEpic,
  PlacesEpic.Places,
  PlacesEpic.shortestDistance
);
//combine reducers
export const rootReducer = combineReducers({
    AuthReducer,
    PlacesReducer
});

//create epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//connect middleware with store
const createStoreWithMiddleware =applyMiddleware(epicMiddleware)(createStore);

//create store with middleware
const Store = createStoreWithMiddleware(
  rootReducer,
);

export default Store;