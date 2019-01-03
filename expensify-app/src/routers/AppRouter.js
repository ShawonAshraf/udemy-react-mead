import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


// routes
import Header from './Header';
import ExpenseDashBoard from './ExpenseDashBoard';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';




const AppRouter = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashBoard} />
        <Route exact={true} path="/create" component={AddExpensePage} />
        <Route exact={true} path="/edit" component={EditExpensePage} />
        <Route exact={true} path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
