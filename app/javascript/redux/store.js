import {createStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit';

import {logger} from 'redux-logger'

import thunk from 'redux-thunk'

import reducerGreet from './greetings/greetReducer'

const reducer = combineReducers(
  {
    greet: reducerGreet,
  }
)

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
