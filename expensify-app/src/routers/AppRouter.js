import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';


// routes
import Header from '../components/Header';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
        <Route exact={true} path="/dashboard" component={ExpenseDashBoard} />
        <Route exact={true} path="/create" component={AddExpensePage} />
        <Route exact={true} path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
