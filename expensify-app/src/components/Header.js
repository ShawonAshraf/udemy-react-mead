import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => {
  return (
    <div>
      <header>
        <h1>Expensify</h1>
        <NavLink to={"/dashboard"} activeClassName={"is-active"} exact={true}>Dashboard</NavLink>
        <NavLink to={"/create"} activeClassName={"is-active"} exact={true}>Create Expense</NavLink>
        <button onClick={startLogOut}>Logout</button>
      </header>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);
