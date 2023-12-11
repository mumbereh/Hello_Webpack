// app/javascript/actions/index.js
import axios from 'axios';

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    const response = await axios.get('/random_greeting');
    dispatch({ type: 'FETCH_RANDOM_GREETING', payload: response.data.greeting });
  };
};
