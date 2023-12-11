// app/javascript/reducers/index.js
const greetingReducer = (state = '', action) => {
    switch (action.type) {
      case 'FETCH_RANDOM_GREETING':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default greetingReducer;
  