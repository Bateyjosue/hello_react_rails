import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:3000/';

export const getGreeting = createAsyncThunk(
  'GET_GREETING',
  async() => {
      const response = await axios.get(BASE_URL);
      console.log(response.data)
      return response.data
    }
);

const reducerGreet = (state = 'Greetings', action) => {
  switch (action.type) {
    case 'GET_GREETING/fulfilled': return action.payload
    default: return state
  }
}


export default reducerGreet;
