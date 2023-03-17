import {createStore} from 'redux';

// Define the initial state of the store
const initialState = {
  count: 0,
  userInput: '',
};

export const setUserInput = (userText: String) => ({
  type: 'SET_INPUT_VALUE',
  payload: userText,
});

// Define the reducer function that updates the state
function reducer(
  state = initialState,
  action: {type: string; payload: string},
) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    case 'SET_INPUT_VALUE':
      return {...state, userInput: action.payload};
    case 'none':
      return {...state, userInput: (state.userInput = 'hello world!!!')};
    default:
      return state;
  }
}

// Create the store
const store = createStore(reducer);

export default store;
