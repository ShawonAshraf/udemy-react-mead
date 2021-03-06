import database from '../firebase/firebase';

export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const {
      description,
      note,
      amount,
      createdAt
    } = expenseData;

    const uid = getState().auth.uid;
    const expense = { description, note, amount, createdAt };

    database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses/${id}`).remove(() => {
      // dispatch store update
      dispatch(removeExpense({ id }));
    });
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

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
}

// set expenses from db
export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses
  };
};

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((child) => {
        expenses.push({
          id: child.key,
          ...child.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
