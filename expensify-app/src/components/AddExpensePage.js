import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.startAddExpense(expense);
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
