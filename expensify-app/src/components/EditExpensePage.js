import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      {/* This is from edit expense page component with id: {props.match.params.id} */}
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          // dispatch action to store
          props.dispatch(startEditExpense(props.expense.id, expense));
          // redirect to dashboard
          props.history.push('/');
          // console.log('update dispatched');
        }}
      />
      <button onClick={() => {
        // dispatch removal
        props.dispatch(startRemoveExpense({ id: props.expense.id }));
        // redirect to dashboard
        props.history.push('/');
        // console.log(id);
      }}>Remove Expense</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditExpensePage);
