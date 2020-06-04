import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { createLogger } from 'redux-logger';
import testReducer from '../reducers/index';

const middlewares = applyMiddleware(createLogger());

const store = createStore(testReducer, middlewares);

export default store;
