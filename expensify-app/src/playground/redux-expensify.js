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
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
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
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
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
      createdAt: 12000
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

// add expense
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

// remove expense
const removeExpense = ({id = ''} = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
};

// edit expense
const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};

// filter actions

// set filter text
const setTextFilter = ({ text = ''} = {}) => {
  return {
    type: 'SET_FILTER_TEXT',
    text
  };
};

// set start date
const setStartDate = (startDate = 0) => {
  return {
    type: 'SET_START_DATE',
    startDate
  };
};

// set end date
const setEndDate = (endDate = 0) => {
  return {
    type: 'SET_END_DATE',
    endDate
  };
};

// sort by amount
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

// sort by date
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};


// match strings
const matchText = (a, b) => {
  return a.includes(b);
};
// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = matchText(expense.description.toLowerCase(), text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};


// create store
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 100,
  createdAt: -21000
}));
// console.log(expenseOne);

const expenseTwo = store.dispatch(addExpense(
  {
    description: 'Coffee',
    amount: 300,
    createdAt: -1000
  })
);
// console.log(expenseTwo);

// const removeOne = store.dispatch(removeExpense({id: expenseTwo.expense.id}));
// console.log(removeOne);
//
// const editOne = store.dispatch(editExpense(expenseTwo.expense.id, {amount: 299.99}));
// console.log(editOne);
//
// const filterOne = store.dispatch(setTextFilter({ text: 'rent'}));
// console.log(filterOne);
//
// const filterTwo = store.dispatch(sortByAmount());
// console.log(filterTwo);
//
// const filterThree = store.dispatch(sortByDate());
// console.log(filterThree);

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate(56));

store.dispatch(sortByAmount());
store.dispatch(setTextFilter({text: 'Coffee'}));
