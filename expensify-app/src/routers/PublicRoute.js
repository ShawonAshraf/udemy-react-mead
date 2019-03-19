import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from '../components/LoginPage';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => {
      if (isAuthenticated) {
        return (
          <Redirect to="/dashboard" />
        );
      } else {
        return (
          <div>
            <Component {...props} />
          </div>
        );
      }
    }} />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
