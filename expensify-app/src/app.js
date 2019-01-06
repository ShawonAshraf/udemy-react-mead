import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';
// redux
import configureStore from './store/configure-store';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// css reset using normalize
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill'}));
store.dispatch(addExpense({ description: 'Gas Bill'}));
store.dispatch(setTextFilter({text: 'bill'}));

const storeState = store.getState();
const visibleExpenses = getVisibleExpenses(storeState.expenses, storeState.filters);

console.log(visibleExpenses);
// console.log(storeState);



// render the router
ReactDOM.render(AppRouter, document.getElementById("app"));
