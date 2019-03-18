import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
// redux
import configureStore from './store/configure-store';
import { startSetExpenses } from './actions/expenses';

// css reset using normalize
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// firebase
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// show a custome loading screen while everything gets ready
ReactDOM.render(<p>Loading .....</p>, document.getElementById("app"));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});


