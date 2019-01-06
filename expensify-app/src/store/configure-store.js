import {combineReducers, createStore} from "redux";


import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';


export default  () => {
  // create store
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );

  return store;
};
