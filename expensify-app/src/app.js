import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

// css reset using normalize
import 'normalize.css/normalize.css';
import './styles/styles.scss';


// render the router
ReactDOM.render(AppRouter, document.getElementById("app"));
