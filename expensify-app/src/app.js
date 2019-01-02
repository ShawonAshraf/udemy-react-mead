import React from 'react';
import ReactDOM from 'react-dom';
// css reset using normalize
import 'normalize.css/normalize.css';

import IndecisionApp from "./components/IndecisionApp";
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById("app"));
