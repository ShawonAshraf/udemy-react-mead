import uuid from "uuid";

import database from '../firebase/firebase';

export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description,
      note,
      amount,
      createdAt
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// remove expense
export const removeExpense = ({ id = '' } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
};

// edit expense
export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};
