import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// css reset using normalize
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoard = () => {
  return (
    <div>
      This is my dashboard component
    </div>
  );
};

const AddExpensePage = () => {
  return (
    <div>
      This is my add expense component
    </div>
  );
};

const EditExpensePage = () => {
  return (
    <div>
      This is from edit expense page component
    </div>
  );
};

const HelpPage = () => {
  return (
    <div>
      This is from help page
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div>
      404 - <Link to={"/"}>Go Home</Link>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <header>
        <h1>Expensify</h1>
        <NavLink to={"/"} activeClassName={"is-active"} exact={true}>Dashboard</NavLink>
        <NavLink to={"/create"} activeClassName={"is-active"} exact={true}>Create Expense</NavLink>
        <NavLink to={"/edit"} activeClassName={"is-active"} exact={true}>Edit Expense</NavLink>
        <NavLink to={"/help"} activeClassName={"is-active"} exact={true}>Help</NavLink>
      </header>
    </div>
  );
};

// routes
const routes = (
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

ReactDOM.render(routes, document.getElementById("app"));
