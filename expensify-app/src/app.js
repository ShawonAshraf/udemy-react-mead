import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
// redux
import configureStore from './store/configure-store';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// css reset using normalize
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 2356}));

// store.dispatch(sortByAmount());
// store.dispatch(setTextFilter('Gas'));


const storeState = store.getState();
// const visibleExpenses = getVisibleExpenses(storeState.expenses, storeState.filters);

// console.log(visibleExpenses);
// console.log(storeState);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

// render the router
ReactDOM.render(jsx, document.getElementById("app"));
