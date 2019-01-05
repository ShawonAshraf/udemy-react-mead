import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// expenses reducer
const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // use spread operator
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    default:
      return state;
  }
};

// filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// demo state
const demoState = {
  expenses: [
    {
      id: 'jkjkjk',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 567890,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

// actions
const addExpense = (
  {
    description = '', note = '', amount = 0, createdAt = 0
  } = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

const removeExpense = ({id = ''} = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
};


// create store
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense(demoState.expenses[0]));
console.log(expenseOne);

const expenseTwo = store.dispatch(addExpense(
  {
    description: 'January Subscription Fee',
    amount: 199.99,
    note: 'Done paying for a year!'
  })
);
console.log(expenseTwo);

const removeOne = store.dispatch(removeExpense({id: expenseTwo.expense.id}));
console.log(removeOne);
