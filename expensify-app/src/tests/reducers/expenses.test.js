import moment from 'moment';

// reducer
import reducer from '../../reducers/expenses';

// fixture or test data
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set up with provided state', () => {
  const state = reducer(expenses, { type: '@@INIT' });
  expect(state).toEqual(expenses);
});

test('add expense', () => {
  const expense = {
    id: '4',
    description: 'Data04',
    amount: 4,
    createdAt: moment(0).add(4, 'days').valueOf()
  };

  const state = reducer(expenses, {
    type: 'ADD_EXPENSE',
    expense
  });

  expect(state).toEqual(expenses.concat(expense));
});

test('remove expense', () => {
  const state = reducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: '1'
  });

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('edit expense', () => {
  const state = reducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      amount: 4500
    }
  });

  expect(state[0].amount).toEqual(4500);
});
