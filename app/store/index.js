import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import AuthReducer from './reducers/auth';
import AuthEpic from "./epic/auth";

//combine epic
const rootEpic = combineEpics(
  AuthEpic.loginEpic
);
//combine reducers
export const rootReducer = combineReducers({
    AuthReducer
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