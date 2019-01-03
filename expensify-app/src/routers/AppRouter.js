import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


// routes
import Header from '../components/Header';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';


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
