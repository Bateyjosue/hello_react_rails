import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger'
import reducerGreet from './greetings/greetReducer'

const reducer = {
    greet: reducerGreet,
  };

const store = configureStore({
  reducer,
  middleware: (getdefault) => getdefault().concat(logger),
})

export default store;
