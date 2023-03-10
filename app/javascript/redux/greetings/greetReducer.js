import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://127.0.0.1:3000/';

export const getGreeting = createAsyncThunk(
  'GET_GREETING',
  async() => {
      const response = await axios.get('/');
      return response.data.text
    }
);

const reducerGreet = (state = 'Greetings', action) => {
  switch (action.type) {
    case 'GET_GREETING/fulfilled': return action.payload
    default: return state
  }
}

console.log('Loading...')



export default reducerGreet;
