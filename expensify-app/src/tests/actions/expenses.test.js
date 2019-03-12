import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// test for removeExpense
test('should setup removeExpense', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// editExpense
test('should setup editExpense', () => {
  const noteUpdate = {
    note: 'This is an update'
  };

  const editedAction = editExpense('123abc', noteUpdate);
  expect(editedAction).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: noteUpdate
  });
});

// addExpense
test('should setup addExpense with provided values', () => {
  const expense = {
    description: 'Test Expense',
    note: '',
    amount: 123,
    createdAt: 0,
    id: 'hallelujah123'
  };

  const ret = addExpense(expense);
  expect(ret).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test('should setup addExpense with default values', () => {
  const expense = undefined;

  const ret = addExpense();
  expect(ret).toEqual({
    type: 'ADD_EXPENSE',
    expense: undefined
  });
});
