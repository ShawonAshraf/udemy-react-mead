import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';


// routes
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

// private
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
        <PrivateRoute exact={true} path="/dashboard" component={ExpenseDashBoard} />
        <PrivateRoute exact={true} path="/create" component={AddExpensePage} />
        <PrivateRoute exact={true} path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
