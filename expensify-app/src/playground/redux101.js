import { createStore} from "redux/es/redux";


const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.newValue
      };
    default:
      return state;
  }
});

// actions
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  };
};

const resetCount = () => {
  return {
    type: 'RESET'
  };
};

const setCount = ({ newValue = 1 } = {}) => {
  return {
    type: 'SET',
    newValue
  };
};


// test out

store.dispatch(incrementCount({ incrementBy: 10 }));
console.log(store.getState());

store.dispatch(resetCount());
console.log(store.getState());

store.dispatch(setCount({ newValue: 6}));
console.log(store.getState());
